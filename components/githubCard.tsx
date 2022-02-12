import useSWR from 'swr'
import Markdown from 'markdown-to-jsx'
import styles from '../styles/Grid.module.css'
import Image from 'next/image'
const yaml = require('js-yaml')

const fetcher = async (url: RequestInfo) => {
    const res = await fetch(url)

    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
        const error: any = new Error('An error occurred while fetching the data.')
      // Attach extra info to the error object.
        error.info = await res.json()
        error.status = res.status
        throw error
    }

    return res.json()
}

//(input: RequestInfo, init?: RequestInit | undefined) => fetch(input, init).then((res) => res.json())
const textFetcher = (input: RequestInfo, init?: RequestInit | undefined) => fetch(input, init).then((res) => res.text())

type Repository = {
    title: string
    description: string
    url: string
}

type CardsProps = {
    repositories: Repository[]
}

type ColorResponse = {
    data: any
    isLoading: boolean
    isError: any
}

function useColors() {
    const { data, error } = useSWR('https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml', textFetcher)
    
    return {
        data: yaml.load(data),
        isLoading: !error && !data,
        isError: error
    }
}

function useRepo(repoUrl: string) {
    const { data, error } = useSWR(`https://api.github.com/repos/${repoUrl}`, fetcher, { shouldRetryOnError: false })

    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}

function useLanguages(repoUrl: string) {
    const { data, error } = useSWR(`https://api.github.com/repos/${repoUrl}/languages`, fetcher, { shouldRetryOnError: false })

    return {
        languageData: data,
        isLoading: !error && !data,
        isError: error
    }
}

function Color(language: (number | string)[], colors: any, totalBytes: number) {
    const bytes = language[1] as number
    return (
        <div style={{backgroundColor: colors[language[0]].color, height: `${Math.round(bytes/totalBytes*10000)/100}%`, width: '100%'}} key={language[0]}></div>
    )
}

function ColorTip(language: (number | string)[], totalBytes: number) {
    const bytes = language[1] as number
    return (
        <div style={{height: `${Math.round(bytes/totalBytes*100)}%`, width: '100%'}} key={language[0]}>
            <span data-language={language[0]}></span>
        </div>
    )
}

function Card(repository: Repository, colorResponse: ColorResponse) {
    const { data, isLoading, isError } = useRepo(repository.url)
    const { languageData, isLoading: isLanguageLoading, isError: isLanguageError } = useLanguages(repository.url)
    if (isLoading || isError || isLanguageLoading || isLanguageError || colorResponse.isLoading || colorResponse.isError) return (
        <div className={styles.card} key={repository.url}>
            <h3>{repository.title}</h3>
            <Markdown options={{forceBlock: true}}>{repository.description}</Markdown>
            <a href={`https://github.com/${repository.url}`} style={{justifySelf: 'flex-end'}}>{repository.url}</a>
        </div>
    )
    const totalBytes = Object.values<number>(languageData).reduce((a: number, b: number) => a + b, 0)
    return (
        <div className={styles.card} key={repository.url}>
            <h3>{repository.title}</h3>
            <Markdown options={{forceBlock: true}}>{repository.description}</Markdown>
            <div className={styles.stats}>
                <div className={styles.inlineStat}>
                    <img src="/star.svg" alt="Stars" width={16} height={16} />
                    <span>{data.stargazers_count}</span>
                </div>
                <div className={styles.inlineStat}>
                    <img src="/fork.svg" alt="Forks" width={16} height={16} />
                    <span>{data.forks_count}</span>
                </div>
            </div>
            <span>Primary Language: <i>{data.language}</i></span>
            <div className={styles.colors}>
                {Object.entries<string | number>(languageData).map(language => Color(language, colorResponse.data, totalBytes))}
            </div>
            <div className={styles.colorsToolTip}>
                {Object.entries<string | number>(languageData).map(language => ColorTip(language, totalBytes))}
            </div>
            <a href={`https://github.com/${repository.url}`} style={{justifySelf: 'flex-end'}}>{repository.url}</a>
        </div>
    )
}

function Cards(props: CardsProps) {
    const colorResponse = useColors()
    return (
        <div className={styles.grid}>
            {props.repositories.map(r => Card(r, colorResponse))}
        </div>
    )
}

export default Cards
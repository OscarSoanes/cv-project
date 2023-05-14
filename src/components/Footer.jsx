import { AiFillGithub } from 'react-icons/ai'

export function Footer() {
    return (
        <footer className="flex gap-1 justify-center content-center items-center mt-12 p-2 rounded-t-lg bg-slate-700 text-gray-100">
            <p>Built by</p>
            <a className="flex gap-3 underline hover:text-sky-300" href="https://github.com/OscarSoanes">Oscar Soanes <AiFillGithub className="h-6 w-6"/> </a>
        </footer>
    )
}
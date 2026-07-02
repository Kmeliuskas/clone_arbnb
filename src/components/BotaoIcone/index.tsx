interface BotaoIconeProps {
    icone:    React.ReactNode
    text:     string
    // children: React.ReactNode
}

const BotaoIcone = ( props: BotaoIconeProps) => {
    return (
        <>
            <button className="rounded-xl border-gray-200 border-2 flex items-center gap-2 px-4 py-2 hover:border-gray-400">
                <span>{props.icone}</span>
                <span>{props.text}</span>
            </button>
        </>
    )
}

export default BotaoIcone
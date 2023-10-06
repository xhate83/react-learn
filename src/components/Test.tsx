interface Props {
    children: JSX.Element
}

export function Test({children}: Props) {
    return (
        <div style={{color: 'red'}}>
           {children}
        </div>
    )
}
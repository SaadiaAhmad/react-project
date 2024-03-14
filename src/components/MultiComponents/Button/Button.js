function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
}) {
    return (
        <div>
            <button>{children}</button>
        </div>
    )
}

export default Button;
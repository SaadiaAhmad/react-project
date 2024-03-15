import classnames from 'classnames';

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
    const finalClassName = classnames('px-3 py-1.5 m-3 border', {
        'border-blue-600 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-800 text-white': secondary,
        'border-green-600 bg-green-500 text-white': success,
        'border-yellow-500 bg-yellow-400 text-white': warning,
        'border-red-600 bg-red-500 text-white': danger,
        // 'border-blue-600 bg-blue-500 text-white': outline,
        // 'border-blue-600 bg-blue-500 text-white': rounded,
    });

    return (
        <div>
            <button className={finalClassName}>{children}</button>
        </div>
    )
}

Button.propTypes = {
    checkVariationValue: ({
        primary,
        secondary,
        success,
        warning,
        danger
    }) => {
        const count = Number(!!primary) +
            Number(!!secondary) +
            Number(!!success) +
            Number(!!warning) +
            Number(!!danger);
        if(count > 1) return new Error('Only one variation value should be provided.');
    }
}

export default Button;
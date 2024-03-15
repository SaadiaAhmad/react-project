import classnames from 'classnames';
import { twMerge } from 'tailwind-merge';

function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {
    const finalClassName = twMerge(
        classnames('px-3 py-1.5 m-3 border flex items-center', {
        'border-blue-600 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-800 text-white': secondary,
        'border-green-600 bg-green-500 text-white': success,
        'border-yellow-500 bg-yellow-400 text-white': warning,
        'border-red-600 bg-red-500 text-white': danger,
        'bg-white': outline,
        'rounded-full': rounded,
        'text-blue-500': outline && primary,
        'text-gray-500': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-500': outline && warning,
        'text-red-500': outline && danger,
        })
    );

    return (
        <div>
            <button className={finalClassName} {...rest}>{children}</button>
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
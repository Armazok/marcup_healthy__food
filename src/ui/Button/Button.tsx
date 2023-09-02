import './Button.scss';

interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    type?: 'submit' | 'button' | 'reset'
    label: string;
    onClick?: () => void;
}

export const Button = ({
                           primary = false,
                           size = 'medium',
                           type,
                           backgroundColor,
                           label,
                           ...props
                       }: ButtonProps) => {

    return (
        <button
            type={type}
            className="Button"
            {...props}
        >
            {label}
        </button>
    );
};

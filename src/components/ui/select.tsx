import { ArrowDown } from "lucide-react"

export function SelectField({
                                id,
                                options,
                                value,
                                onChange,
                                className = "",
                            }: {
    id: string
    options: { value: string; label: string }[]
    value?: string
    onChange?: (v: string) => void
    className?: string
}) {
    return (
        <div className="relative w-full">
        <select
            id={id}
    value={value}
    onChange={e => onChange?.(e.target.value)}
    className={`select ${className}`}
>
    {options.map(o => (
        <option key={o.value} value={o.value}>{o.label}</option>
    ))}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-muted">
    <ArrowDown className="h-4 w-4" />
        </div>
        </div>
)
}
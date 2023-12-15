export function formatDateForInputDatetime(date: Date, { time = false }): string {
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')

    if (time) return `${year}-${month}-${day}T${hours}:${minutes}`
    return `${year}-${month}-${day}`
}

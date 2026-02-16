import english from './english.json'
import german from './german.json'

export const locales = {
    en: english,
    de: german,
}

export const datetimeFormats = {
    en: {
        short: {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        },
        long: {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            weekday: 'long',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }
    },
    de: {
        short: {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        },
        long: {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: false,
        }
    }
}

export const numberFormats = {
    en: {
        currency: {
            style: 'currency',
            currency: 'USD',
            notation: 'standard',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        },
        decimal: {
            style: 'decimal',
            minimumFractionDigits: 0,
        },
        percent: {
            style: 'percent',
            useGrouping: false,
        }
    },
    de: {
        currency: {
            style: 'currency',
            currency: 'EUR',
            notation: 'standard',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,

        },
        decimal: {
            style: 'decimal',
            minimumFractionDigits: 0,
        },
        percent: {
            style: 'percent',
            useGrouping: false,
        }
    }
}
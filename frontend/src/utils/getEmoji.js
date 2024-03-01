
export const getEmoji = () => {
    const emoji = [
        "🚗",
        "🚓",
        "🚚",
        "🚒",
        "🚑",
        "🚎",
        "🚐",
        "🚌",
        "🚙",
        "🛺",
        "🚕",
        "🚜",
    ]
    return emoji[Math.floor(Math.random() * emoji.length)];
}
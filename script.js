/**
 * Password Generator
 * Bikin password kuat & acak pakai JavaScript.
 * 
 * Author: Mhd Dimas Naufal
 */

// Karakter untuk password
const CHARS = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
}

// Ambil elemen DOM
const passwordOutput = document.getElementById('password-output')
const copyBtn = document.getElementById('copy-btn')
const lengthSlider = document.getElementById('length')
const lengthValue = document.getElementById('length-value')
const uppercaseCheck = document.getElementById('uppercase')
const lowercaseCheck = document.getElementById('lowercase')
const numbersCheck = document.getElementById('numbers')
const symbolsCheck = document.getElementById('symbols')
const generateBtn = document.getElementById('generate-btn')
const resetBtn = document.getElementById('reset-btn')
const strengthBar = document.getElementById('strength-bar')
const strengthText = document.getElementById('strength-text')
const historyCard = document.getElementById('history-card')
const historyList = document.getElementById('history-list')
const clearHistoryBtn = document.getElementById('clear-history-btn')

// Riwayat password
let history = []

// Update tampilan panjang password
lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value
})

// Generate password acak
function generatePassword(length, options) {
    let charset = ''
    if (options.uppercase) charset += CHARS.uppercase
    if (options.lowercase) charset += CHARS.lowercase
    if (options.numbers) charset += CHARS.numbers
    if (options.symbols) charset += CHARS.symbols

    if (charset === '') {
        alert('Pilih minimal satu jenis karakter!')
        return null
    }

    let password = ''
    const array = new Uint32Array(length)
    crypto.getRandomValues(array)

    for (let i = 0; i < length; i++) {
        password += charset[array[i] % charset.length]
    }

    return password
}

// Hitung kekuatan password
function calculateStrength(password) {
    let score = 0
    if (password.length >= 8) score++
    if (password.length >= 12) score++
    if (password.length >= 16) score++
    if (/[A-Z]/.test(password)) score++
    if (/[a-z]/.test(password)) score++
    if (/[0-9]/.test(password)) score++
    if (/[^A-Za-z0-9]/.test(password)) score++

    if (score <= 2) return { level: 'Lemah', color: '#dc3545', width: '25%' }
    if (score <= 4) return { level: 'Sedang', color: '#ffc107', width: '50%' }
    if (score <= 5) return { level: 'Kuat', color: '#28a745', width: '75%' }
    return { level: 'Sangat Kuat', color: '#00c853', width: '100%' }
}

// Handle generate
function handleGenerate() {
    const length = parseInt(lengthSlider.value)
    const options = {
        uppercase: uppercaseCheck.checked,
        lowercase: lowercaseCheck.checked,
        numbers: numbersCheck.checked,
        symbols: symbolsCheck.checked
    }

    const password = generatePassword(length, options)
    if (!password) return

    passwordOutput.value = password

    // Update strength meter
    const strength = calculateStrength(password)
    strengthBar.style.width = strength.width
    strengthBar.style.background = strength.color
    strengthText.textContent = `Kekuatan: ${strength.level}`
    strengthText.style.color = strength.color

    // Tambah ke riwayat
    addToHistory(password)
}

// Tambah ke riwayat
function addToHistory(password) {
    history.unshift(password)
    if (history.length > 5) history.pop()
    renderHistory()
}

// Render riwayat
function renderHistory() {
    if (history.length === 0) {
        historyCard.style.display = 'none'
        return
    }

    historyCard.style.display = 'block'
    historyList.innerHTML = ''

    history.forEach((pwd) => {
        const li = document.createElement('li')
        li.innerHTML = `
            <span>${pwd}</span>
            <button onclick="copyText('${pwd}')" style="background:none;border:none;cursor:pointer;color:#FF5733;font-size:1rem;">📋</button>
        `
        historyList.appendChild(li)
    })
}

// Copy ke clipboard
function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('✅ Password berhasil di-copy!')
    }).catch(() => {
        alert('❌ Gagal copy. Copy manual ya.')
    })
}

// Handle copy button
copyBtn.addEventListener('click', () => {
    if (!passwordOutput.value) {
        alert('Generate password dulu!')
        return
    }
    copyText(passwordOutput.value)
})

// Handle reset
function handleReset() {
    passwordOutput.value = ''
    lengthSlider.value = 16
    lengthValue.textContent = '16'
    uppercaseCheck.checked = true
    lowercaseCheck.checked = true
    numbersCheck.checked = true
    symbolsCheck.checked = true
    strengthBar.style.width = '0'
    strengthText.textContent = 'Menunggu generate...'
    strengthText.style.color = '#aaa'
}

// Handle clear history
clearHistoryBtn.addEventListener('click', () => {
    history = []
    renderHistory()
})

// Event listeners
generateBtn.addEventListener('click', handleGenerate)
resetBtn.addEventListener('click', handleReset)

// Generate otomatis saat pertama kali load
window.addEventListener('load', () => {
    handleGenerate()
})
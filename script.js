let hasil = 0
let bilangan = 0
let isKoma = false
let isOperated = false
let firstOpr = true
let tempOpr = null
let tempHasil = 0
let output = document.querySelector('#output')

function TombolAngka(angka) {
    if(isOperated){
        output.value = ''
        isOperated = false
    }
    if(output.value == '0'){
        output.value = angka
    } else{
        output.value = output.value + angka
    }
}

function TombolOperator(operator){
    isKoma = false
    bilangan = parseFloat(output.value)
    if(firstOpr){
        tempHasil = bilangan
        tempOpr = operator
        firstOpr = false
        isOperated = true
    } else{
        isOperated = true
        hasil = tempHasil
        Hitung(tempOpr)
        tempHasil = hasil
        tempOpr = operator
        output.value = hasil
    }
}

function TombolSamaDengan() {
    bilangan = parseFloat(output.value)
    isOperated = true
    firstOpr = true
    hasil = tempHasil
    Hitung(tempOpr)
    output.value = hasil
    tempHasil = 0
    hasil = 0
    tempOpr = null
    isKoma = false
}

function Hitung(operator) {
    switch(operator){
        case '+':
            hasil += bilangan
            break
        case '-':
            hasil -= bilangan
            break
        case '*':
            hasil *= bilangan
            break
        case '/':
            hasil /= bilangan
            break
    }
}

function TombolClear(){
    output.value = '0'
    isKoma = false
    bilangan = 0
    hasil = 0
    tempHasil = 0
    isOperated = false
    tempOpr = null
    firstOpr = true
}

function TombolKoma(){
    if(!isKoma){
        isKoma = true
        output.value = output.value + '.'
    }
}

function TombolDelete(){
    if(output.value != '0'){
        output.value = output.value.slice("0",-1)
        var posisiKoma = output.value.indexOf('.')
        if(output.value == ''){
            output.value = '0'
        }
        if(posisiKoma == -1){
            isKoma = false
        }
    }
    bilangan = parseFloat(output.value)
}
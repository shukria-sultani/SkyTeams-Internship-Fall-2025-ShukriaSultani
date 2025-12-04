export const formatNumber = (num)=>{
    let formattedNumber  = parseFloat(num.toFixed(2))
    return formattedNumber.toString()
}
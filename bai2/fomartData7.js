const format_date = (date = new Date())=>{
    date = date.toLocaleDateString('vi-VN');
    return date;
}

export const date = format_date();

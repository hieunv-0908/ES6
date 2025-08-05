const type_console = (type = "log") => {
    if (type === "log") {
        console.log(`Đây là type: ${type}`);
    }else if(type === "warn"){
        console.warn(`Đây là type: ${type}`);
    }else if(type === "error"){
        console.error(`Đây là type: ${type}`);
    }else{
        console.info("Không thể nhận dạng được lỗi!!!!!");
    }
}

type_console();
type_console("log");
type_console("warn");
type_console("error");

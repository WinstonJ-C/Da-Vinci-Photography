const isDarkSheme = window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches;
if(isDarkSheme){
    console.log("Dark interface preferred")
}
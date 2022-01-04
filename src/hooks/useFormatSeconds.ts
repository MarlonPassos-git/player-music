export function useFormatSeconds(seconds: number) {
  
    let timeFormatted = ''

    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    if (hrs > 0) {
        timeFormatted += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    timeFormatted += "" + mins + ":" + (secs < 10 ? "0" : "");
    timeFormatted += "" + secs;
    return timeFormatted;



}
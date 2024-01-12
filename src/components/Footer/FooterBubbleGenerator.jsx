export const FooterBubbleGenerator = () => {


    let bubbleSize = 2 + Math.random() * 4;
    let bubbleDistance = 6 + Math.random() * 4;
    let bubblePosition = -5 + Math.random() * 110;
    let bubbleTime = 2 + Math.random() * 2;
    let bubbleDelay = -1 * (2 + Math.random() * 2);


    return (
        <div className="bubble"
             style={{
                 size: bubbleSize + "rem",
                 distance: bubbleDistance + "rem",
                 position: bubblePosition + "%",
                 time: bubbleTime + "s",
                 delay: bubbleDelay + "s",
             }}
        />
    )
}
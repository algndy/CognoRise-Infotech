import styles from "./CircularProgressBar.module.css";
function CircularProgressBar({ result, fontSize, range }) {
  const width = 300 / 16;
  const strokeWidth = 6;
  const ration = 4;
  const center = (width * 16) / 2;
  const radius = (width * 16 - (width * 16) / ration) / 2;
  const innerBoundary =
    ((width * 16 - radius * 2) / 2) * ((width * 16 * 13) / 5000);
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray - (dashArray * result) / range;
  const innerResultWidth = (width * 8) / 15;
  console.log(range);

  return (
    <div
      className={styles.container}
      style={{
        width: `${width}rem`,
        height: `${width}rem`,
      }}
    >
      <div
        className={styles.progressBars}
        style={{
          width: `${width}rem`,
          height: `${width}rem`,
          "--dashOffset": `${dashOffset}`,
          "--dashArray": `${dashArray}`,
          "--progress": `${result}`,
          "--innerBoundary": `${innerBoundary}`,
        }}
      >
        <svg>
          <defs>
            <filter
              id="inset-shadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feComponentTransfer in="SourceAlpha">
                <feFuncA type="table" tableValues="1 0" />
              </feComponentTransfer>
              <feGaussianBlur stdDeviation="3" />
              <feOffset dx="-3" dy="-3" result="offsetblur" />
              <feFlood floodColor="rgba(0, 0, 0, 0.3)" result="color" />
              <feComposite in2="offsetblur" operator="in" />
              <feComposite in2="SourceAlpha" operator="in" />
              <feMerge>
                <feMergeNode in="SourceGraphic" />
                <feMergeNode />
              </feMerge>
            </filter>
          </defs>

          <circle
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            className={styles.remain}
            filter="url(#inset-shadow)"
          ></circle>
          <circle
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            className={styles.done}
            // filter="url(#inset-shadow)"
          ></circle>
        </svg>
        <div
          className={styles.tail}
          style={{ "--rotationDeg": `${(360 / range) * result}` }}
        ></div>
      </div>
      <div
        className={styles.result}
        style={{
          width: `${innerResultWidth}rem`,
          fontSize: `${fontSize || "1rem"}`,
        }}
      >
        {result}
      </div>
    </div>
  );
}

export default CircularProgressBar;

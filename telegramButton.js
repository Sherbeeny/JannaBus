var htmlCode = `
  <a href="https://t.me/+qVBlWzGFnfZhMWM0" target="_blank" style="
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
  ">
    <div style="
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #0088cc;
      display: flex;
      justify-content: center;
      align-items: center;
      animation-name: pulse;
      animation-duration: 1.5s;
      animation-timing-function: ease-out;
      animation-iteration-count: infinite;
    ">
      <svg viewBox="0 0 64 64" style="
        fill: #fff;
        width: 30px;
        height: 30px;
      ">
        <path d="M56.4,8.2l-51.2,20c-1.7,0.6-1.6,3,0.1,3.5l9.7,2.9c2.1,0.6,3.8,2.2,4.4,4.3l3.8,12.1c0.5,1.6,2.5,2.1,3.7,0.9 l5.2-5.3c0.9-0.9,2.2-1,3.2-0.3l11.5,8.4c1.6,1.2,3.9,0.3,4.3-1.7l8.7-41.8C60.4,9.1,58.4,7.4,56.4,8.2z M50,17.4L29.4,35.6 c-1.1,1-1.9,2.4-2,3.9c-0.2,1.5-2.3,1.7-2.8,0.3l-0.9-3c-0.7-2.2,0.2-4.5,2.1-5.7l23.5-14.6C49.9,16.1,50.5,16.9,50,17.4z"></path>
      </svg>
    </div>
  </a>
`;

var tempDiv = document.createElement('div');
tempDiv.innerHTML = htmlCode;
document.body.appendChild(tempDiv.firstChild);

var style = document.createElement('style');
style.innerHTML = `
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(0, 136, 204, 0.5);
    }
    80% {
      box-shadow: 0 0 0 14px rgba(0, 136, 204, 0);
    }
  }
`;
document.head.appendChild(style);

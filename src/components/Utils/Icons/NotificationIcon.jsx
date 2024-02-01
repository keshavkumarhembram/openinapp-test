import React from "react";

function NotificationIcon({fill}) {
  return (
    <svg
      width="18"
      height="23"
      viewBox="0 0 18 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.7071 7.81964C15.7071 9.20272 16.039 10.0179 16.7695 10.9574C17.3231 11.6495 17.5 12.5379 17.5 13.5017C17.5 14.4644 17.2128 15.3784 16.6373 16.1204C15.884 17.0099 14.8215 17.5778 13.7372 17.6765C12.1659 17.824 10.5937 17.9482 9.0005 17.9482C7.40634 17.9482 5.83505 17.8739 4.26375 17.6765C3.17846 17.5778 2.11602 17.0099 1.36367 16.1204C0.78822 15.3784 0.5 14.4644 0.5 13.5017C0.5 12.5379 0.677901 11.6495 1.23049 10.9574C1.98384 10.0179 2.29392 9.20272 2.29392 7.81964V7.35048C2.29392 5.49823 2.71333 4.28706 3.577 3.1014C4.86106 1.37227 6.91935 0.335236 8.95577 0.335236H9.04522C11.1254 0.335236 13.2502 1.42218 14.5125 3.22563C15.3314 4.38688 15.7071 5.54703 15.7071 7.35048V7.81964ZM6.07367 20.2246C6.07367 19.67 6.53582 19.416 6.96318 19.3073C7.46309 19.1909 10.5093 19.1909 11.0092 19.3073C11.4365 19.416 11.8987 19.67 11.8987 20.2246C11.8738 20.7525 11.5926 21.2206 11.204 21.5178C10.7001 21.9504 10.1087 22.2243 9.49057 22.323C9.14868 22.3718 8.81275 22.3729 8.48279 22.323C7.86361 22.2243 7.27227 21.9504 6.76937 21.5167C6.37978 21.2206 6.09852 20.7525 6.07367 20.2246Z"
        fill={fill !== undefined ? fill : "#9A9AA9"}
      />
    </svg>
  );
}

export default NotificationIcon;

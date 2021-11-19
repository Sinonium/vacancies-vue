<template>
  <div class="cart-rating_course">
    <div class="cart-rating_course_first">
      <h4>4.8</h4>
      <div>
        <span v-for="star in starTest" :key="star.key">
          <img src="@/assets/icons/DetailsAboutTeach/starActive.svg" alt="" />
        </span>
      </div>
      <span> Course Rating </span>
    </div>
    <div class="cart-rating_course_second">
      <ul>
        <li>
          <div class="lineStar"><span> </span></div>
          <div class="stars">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.1308 12.2479L10.5891 14.3396C11.2225 14.7229 11.9975 14.1562 11.8308 13.4396L10.9141 9.50623L13.9725 6.85623C14.5308 6.3729 14.2308 5.45623 13.4975 5.3979L9.47246 5.05623L7.89746 1.33956C7.61413 0.664563 6.64746 0.664563 6.36413 1.33956L4.78913 5.0479L0.764131 5.38956C0.0307978 5.4479 -0.269202 6.36456 0.289131 6.8479L3.34746 9.4979L2.4308 13.4312C2.26413 14.1479 3.03913 14.7146 3.67246 14.3312L7.1308 12.2479Z"
                fill="#FFCB33"
              />
            </svg>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.1308 12.2479L10.5891 14.3396C11.2225 14.7229 11.9975 14.1562 11.8308 13.4396L10.9141 9.50623L13.9725 6.85623C14.5308 6.3729 14.2308 5.45623 13.4975 5.3979L9.47246 5.05623L7.89746 1.33956C7.61413 0.664563 6.64746 0.664563 6.36413 1.33956L4.78913 5.0479L0.764131 5.38956C0.0307978 5.4479 -0.269202 6.36456 0.289131 6.8479L3.34746 9.4979L2.4308 13.4312C2.26413 14.1479 3.03913 14.7146 3.67246 14.3312L7.1308 12.2479Z"
                fill="#FFCB33"
              />
            </svg>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.1308 12.2479L10.5891 14.3396C11.2225 14.7229 11.9975 14.1562 11.8308 13.4396L10.9141 9.50623L13.9725 6.85623C14.5308 6.3729 14.2308 5.45623 13.4975 5.3979L9.47246 5.05623L7.89746 1.33956C7.61413 0.664563 6.64746 0.664563 6.36413 1.33956L4.78913 5.0479L0.764131 5.38956C0.0307978 5.4479 -0.269202 6.36456 0.289131 6.8479L3.34746 9.4979L2.4308 13.4312C2.26413 14.1479 3.03913 14.7146 3.67246 14.3312L7.1308 12.2479Z"
                fill="#FFCB33"
              />
            </svg>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.1308 12.2479L10.5891 14.3396C11.2225 14.7229 11.9975 14.1562 11.8308 13.4396L10.9141 9.50623L13.9725 6.85623C14.5308 6.3729 14.2308 5.45623 13.4975 5.3979L9.47246 5.05623L7.89746 1.33956C7.61413 0.664563 6.64746 0.664563 6.36413 1.33956L4.78913 5.0479L0.764131 5.38956C0.0307978 5.4479 -0.269202 6.36456 0.289131 6.8479L3.34746 9.4979L2.4308 13.4312C2.26413 14.1479 3.03913 14.7146 3.67246 14.3312L7.1308 12.2479Z"
                fill="#FFCB33"
              />
            </svg>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.1308 12.2479L10.5891 14.3396C11.2225 14.7229 11.9975 14.1562 11.8308 13.4396L10.9141 9.50623L13.9725 6.85623C14.5308 6.3729 14.2308 5.45623 13.4975 5.3979L9.47246 5.05623L7.89746 1.33956C7.61413 0.664563 6.64746 0.664563 6.36413 1.33956L4.78913 5.0479L0.764131 5.38956C0.0307978 5.4479 -0.269202 6.36456 0.289131 6.8479L3.34746 9.4979L2.4308 13.4312C2.26413 14.1479 3.03913 14.7146 3.67246 14.3312L7.1308 12.2479Z"
                fill="#FFCB33"
              />
            </svg>
          </div>
          <span> 74% </span>
        </li>
        <li>
          <div class="lineStar"><span> </span></div>
          <div class="stars">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.1308 12.2479L10.5891 14.3396C11.2225 14.7229 11.9975 14.1562 11.8308 13.4396L10.9141 9.50623L13.9725 6.85623C14.5308 6.3729 14.2308 5.45623 13.4975 5.3979L9.47246 5.05623L7.89746 1.33956C7.61413 0.664563 6.64746 0.664563 6.36413 1.33956L4.78913 5.0479L0.764131 5.38956C0.0307978 5.4479 -0.269202 6.36456 0.289131 6.8479L3.34746 9.4979L2.4308 13.4312C2.26413 14.1479 3.03913 14.7146 3.67246 14.3312L7.1308 12.2479Z"
                fill="#FFCB33"
              />
            </svg>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.1308 12.2479L10.5891 14.3396C11.2225 14.7229 11.9975 14.1562 11.8308 13.4396L10.9141 9.50623L13.9725 6.85623C14.5308 6.3729 14.2308 5.45623 13.4975 5.3979L9.47246 5.05623L7.89746 1.33956C7.61413 0.664563 6.64746 0.664563 6.36413 1.33956L4.78913 5.0479L0.764131 5.38956C0.0307978 5.4479 -0.269202 6.36456 0.289131 6.8479L3.34746 9.4979L2.4308 13.4312C2.26413 14.1479 3.03913 14.7146 3.67246 14.3312L7.1308 12.2479Z"
                fill="#FFCB33"
              />
            </svg>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.1308 12.2479L10.5891 14.3396C11.2225 14.7229 11.9975 14.1562 11.8308 13.4396L10.9141 9.50623L13.9725 6.85623C14.5308 6.3729 14.2308 5.45623 13.4975 5.3979L9.47246 5.05623L7.89746 1.33956C7.61413 0.664563 6.64746 0.664563 6.36413 1.33956L4.78913 5.0479L0.764131 5.38956C0.0307978 5.4479 -0.269202 6.36456 0.289131 6.8479L3.34746 9.4979L2.4308 13.4312C2.26413 14.1479 3.03913 14.7146 3.67246 14.3312L7.1308 12.2479Z"
                fill="#FFCB33"
              />
            </svg>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.1308 12.2479L10.5891 14.3396C11.2225 14.7229 11.9975 14.1562 11.8308 13.4396L10.9141 9.50623L13.9725 6.85623C14.5308 6.3729 14.2308 5.45623 13.4975 5.3979L9.47246 5.05623L7.89746 1.33956C7.61413 0.664563 6.64746 0.664563 6.36413 1.33956L4.78913 5.0479L0.764131 5.38956C0.0307978 5.4479 -0.269202 6.36456 0.289131 6.8479L3.34746 9.4979L2.4308 13.4312C2.26413 14.1479 3.03913 14.7146 3.67246 14.3312L7.1308 12.2479Z"
                fill="#FFCB33"
              />
            </svg>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.1308 12.2479L10.5891 14.3396C11.2225 14.7229 11.9975 14.1562 11.8308 13.4396L10.9141 9.50623L13.9725 6.85623C14.5308 6.3729 14.2308 5.45623 13.4975 5.3979L9.47246 5.05623L7.89746 1.33956C7.61413 0.664563 6.64746 0.664563 6.36413 1.33956L4.78913 5.0479L0.764131 5.38956C0.0307978 5.4479 -0.269202 6.36456 0.289131 6.8479L3.34746 9.4979L2.4308 13.4312C2.26413 14.1479 3.03913 14.7146 3.67246 14.3312L7.1308 12.2479Z"
                fill="#FFCB33"
              />
            </svg>
          </div>
          <span> 21% </span>
        </li>
        <li>
          <div class="lineStar"><span> </span></div>
          <div class="stars">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.1308 12.2479L10.5891 14.3396C11.2225 14.7229 11.9975 14.1562 11.8308 13.4396L10.9141 9.50623L13.9725 6.85623C14.5308 6.3729 14.2308 5.45623 13.4975 5.3979L9.47246 5.05623L7.89746 1.33956C7.61413 0.664563 6.64746 0.664563 6.36413 1.33956L4.78913 5.0479L0.764131 5.38956C0.0307978 5.4479 -0.269202 6.36456 0.289131 6.8479L3.34746 9.4979L2.4308 13.4312C2.26413 14.1479 3.03913 14.7146 3.67246 14.3312L7.1308 12.2479Z"
                fill="#FFCB33"
              />
            </svg>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.1308 12.2479L10.5891 14.3396C11.2225 14.7229 11.9975 14.1562 11.8308 13.4396L10.9141 9.50623L13.9725 6.85623C14.5308 6.3729 14.2308 5.45623 13.4975 5.3979L9.47246 5.05623L7.89746 1.33956C7.61413 0.664563 6.64746 0.664563 6.36413 1.33956L4.78913 5.0479L0.764131 5.38956C0.0307978 5.4479 -0.269202 6.36456 0.289131 6.8479L3.34746 9.4979L2.4308 13.4312C2.26413 14.1479 3.03913 14.7146 3.67246 14.3312L7.1308 12.2479Z"
                fill="#FFCB33"
              />
            </svg>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.1308 12.2479L10.5891 14.3396C11.2225 14.7229 11.9975 14.1562 11.8308 13.4396L10.9141 9.50623L13.9725 6.85623C14.5308 6.3729 14.2308 5.45623 13.4975 5.3979L9.47246 5.05623L7.89746 1.33956C7.61413 0.664563 6.64746 0.664563 6.36413 1.33956L4.78913 5.0479L0.764131 5.38956C0.0307978 5.4479 -0.269202 6.36456 0.289131 6.8479L3.34746 9.4979L2.4308 13.4312C2.26413 14.1479 3.03913 14.7146 3.67246 14.3312L7.1308 12.2479Z"
                fill="#FFCB33"
              />
            </svg>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.1308 12.2479L10.5891 14.3396C11.2225 14.7229 11.9975 14.1562 11.8308 13.4396L10.9141 9.50623L13.9725 6.85623C14.5308 6.3729 14.2308 5.45623 13.4975 5.3979L9.47246 5.05623L7.89746 1.33956C7.61413 0.664563 6.64746 0.664563 6.36413 1.33956L4.78913 5.0479L0.764131 5.38956C0.0307978 5.4479 -0.269202 6.36456 0.289131 6.8479L3.34746 9.4979L2.4308 13.4312C2.26413 14.1479 3.03913 14.7146 3.67246 14.3312L7.1308 12.2479Z"
                fill="#FFCB33"
              />
            </svg>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.1308 12.2479L10.5891 14.3396C11.2225 14.7229 11.9975 14.1562 11.8308 13.4396L10.9141 9.50623L13.9725 6.85623C14.5308 6.3729 14.2308 5.45623 13.4975 5.3979L9.47246 5.05623L7.89746 1.33956C7.61413 0.664563 6.64746 0.664563 6.36413 1.33956L4.78913 5.0479L0.764131 5.38956C0.0307978 5.4479 -0.269202 6.36456 0.289131 6.8479L3.34746 9.4979L2.4308 13.4312C2.26413 14.1479 3.03913 14.7146 3.67246 14.3312L7.1308 12.2479Z"
                fill="#FFCB33"
              />
            </svg>
          </div>
          <span> 4% </span>
        </li>
        <li>
          <div class="lineStar"><span> </span></div>
          <div class="stars">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.1308 12.2479L10.5891 14.3396C11.2225 14.7229 11.9975 14.1562 11.8308 13.4396L10.9141 9.50623L13.9725 6.85623C14.5308 6.3729 14.2308 5.45623 13.4975 5.3979L9.47246 5.05623L7.89746 1.33956C7.61413 0.664563 6.64746 0.664563 6.36413 1.33956L4.78913 5.0479L0.764131 5.38956C0.0307978 5.4479 -0.269202 6.36456 0.289131 6.8479L3.34746 9.4979L2.4308 13.4312C2.26413 14.1479 3.03913 14.7146 3.67246 14.3312L7.1308 12.2479Z"
                fill="#FFCB33"
              />
            </svg>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.1308 12.2479L10.5891 14.3396C11.2225 14.7229 11.9975 14.1562 11.8308 13.4396L10.9141 9.50623L13.9725 6.85623C14.5308 6.3729 14.2308 5.45623 13.4975 5.3979L9.47246 5.05623L7.89746 1.33956C7.61413 0.664563 6.64746 0.664563 6.36413 1.33956L4.78913 5.0479L0.764131 5.38956C0.0307978 5.4479 -0.269202 6.36456 0.289131 6.8479L3.34746 9.4979L2.4308 13.4312C2.26413 14.1479 3.03913 14.7146 3.67246 14.3312L7.1308 12.2479Z"
                fill="#FFCB33"
              />
            </svg>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.1308 12.2479L10.5891 14.3396C11.2225 14.7229 11.9975 14.1562 11.8308 13.4396L10.9141 9.50623L13.9725 6.85623C14.5308 6.3729 14.2308 5.45623 13.4975 5.3979L9.47246 5.05623L7.89746 1.33956C7.61413 0.664563 6.64746 0.664563 6.36413 1.33956L4.78913 5.0479L0.764131 5.38956C0.0307978 5.4479 -0.269202 6.36456 0.289131 6.8479L3.34746 9.4979L2.4308 13.4312C2.26413 14.1479 3.03913 14.7146 3.67246 14.3312L7.1308 12.2479Z"
                fill="#FFCB33"
              />
            </svg>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.1308 12.2479L10.5891 14.3396C11.2225 14.7229 11.9975 14.1562 11.8308 13.4396L10.9141 9.50623L13.9725 6.85623C14.5308 6.3729 14.2308 5.45623 13.4975 5.3979L9.47246 5.05623L7.89746 1.33956C7.61413 0.664563 6.64746 0.664563 6.36413 1.33956L4.78913 5.0479L0.764131 5.38956C0.0307978 5.4479 -0.269202 6.36456 0.289131 6.8479L3.34746 9.4979L2.4308 13.4312C2.26413 14.1479 3.03913 14.7146 3.67246 14.3312L7.1308 12.2479Z"
                fill="#FFCB33"
              />
            </svg>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.1308 12.2479L10.5891 14.3396C11.2225 14.7229 11.9975 14.1562 11.8308 13.4396L10.9141 9.50623L13.9725 6.85623C14.5308 6.3729 14.2308 5.45623 13.4975 5.3979L9.47246 5.05623L7.89746 1.33956C7.61413 0.664563 6.64746 0.664563 6.36413 1.33956L4.78913 5.0479L0.764131 5.38956C0.0307978 5.4479 -0.269202 6.36456 0.289131 6.8479L3.34746 9.4979L2.4308 13.4312C2.26413 14.1479 3.03913 14.7146 3.67246 14.3312L7.1308 12.2479Z"
                fill="#FFCB33"
              />
            </svg>
          </div>
          <span> 1% </span>
        </li>
        <li>
          <div class="lineStar"><span> </span></div>
          <div class="stars">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.1308 12.2479L10.5891 14.3396C11.2225 14.7229 11.9975 14.1562 11.8308 13.4396L10.9141 9.50623L13.9725 6.85623C14.5308 6.3729 14.2308 5.45623 13.4975 5.3979L9.47246 5.05623L7.89746 1.33956C7.61413 0.664563 6.64746 0.664563 6.36413 1.33956L4.78913 5.0479L0.764131 5.38956C0.0307978 5.4479 -0.269202 6.36456 0.289131 6.8479L3.34746 9.4979L2.4308 13.4312C2.26413 14.1479 3.03913 14.7146 3.67246 14.3312L7.1308 12.2479Z"
                fill="#FFCB33"
              />
            </svg>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.1308 12.2479L10.5891 14.3396C11.2225 14.7229 11.9975 14.1562 11.8308 13.4396L10.9141 9.50623L13.9725 6.85623C14.5308 6.3729 14.2308 5.45623 13.4975 5.3979L9.47246 5.05623L7.89746 1.33956C7.61413 0.664563 6.64746 0.664563 6.36413 1.33956L4.78913 5.0479L0.764131 5.38956C0.0307978 5.4479 -0.269202 6.36456 0.289131 6.8479L3.34746 9.4979L2.4308 13.4312C2.26413 14.1479 3.03913 14.7146 3.67246 14.3312L7.1308 12.2479Z"
                fill="#FFCB33"
              />
            </svg>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.1308 12.2479L10.5891 14.3396C11.2225 14.7229 11.9975 14.1562 11.8308 13.4396L10.9141 9.50623L13.9725 6.85623C14.5308 6.3729 14.2308 5.45623 13.4975 5.3979L9.47246 5.05623L7.89746 1.33956C7.61413 0.664563 6.64746 0.664563 6.36413 1.33956L4.78913 5.0479L0.764131 5.38956C0.0307978 5.4479 -0.269202 6.36456 0.289131 6.8479L3.34746 9.4979L2.4308 13.4312C2.26413 14.1479 3.03913 14.7146 3.67246 14.3312L7.1308 12.2479Z"
                fill="#FFCB33"
              />
            </svg>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.1308 12.2479L10.5891 14.3396C11.2225 14.7229 11.9975 14.1562 11.8308 13.4396L10.9141 9.50623L13.9725 6.85623C14.5308 6.3729 14.2308 5.45623 13.4975 5.3979L9.47246 5.05623L7.89746 1.33956C7.61413 0.664563 6.64746 0.664563 6.36413 1.33956L4.78913 5.0479L0.764131 5.38956C0.0307978 5.4479 -0.269202 6.36456 0.289131 6.8479L3.34746 9.4979L2.4308 13.4312C2.26413 14.1479 3.03913 14.7146 3.67246 14.3312L7.1308 12.2479Z"
                fill="#FFCB33"
              />
            </svg>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.1308 12.2479L10.5891 14.3396C11.2225 14.7229 11.9975 14.1562 11.8308 13.4396L10.9141 9.50623L13.9725 6.85623C14.5308 6.3729 14.2308 5.45623 13.4975 5.3979L9.47246 5.05623L7.89746 1.33956C7.61413 0.664563 6.64746 0.664563 6.36413 1.33956L4.78913 5.0479L0.764131 5.38956C0.0307978 5.4479 -0.269202 6.36456 0.289131 6.8479L3.34746 9.4979L2.4308 13.4312C2.26413 14.1479 3.03913 14.7146 3.67246 14.3312L7.1308 12.2479Z"
                fill="#FFCB33"
              />
            </svg>
          </div>
          <span> {{ '<1%' }} </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["courses"],
  setup() {
    const starTest = [
      {
        num: 1,
        key: 0,
      },
      {
        num: 2,
        key: 1,
      },
      {
        num: 3,
        key: 2,
      },
      {
        num: 4,
        key: 3,
      },
      {
        num: 5,
        key: 4,
      },
    ]

    return { starTest }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
.col-3 {
  width: 30%;
}
.col-5 {
  width: 70%;
}
.cart-rating_course {
  margin-top: vw(30);
  height: vw(255);
  width: vw(730);
  display: flex;
  padding: vw(35) vw(40) vw(74) vw(37);
  background: $white;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(54, 61, 77, 0.05);
  &_first {
    @include flex();
    flex-direction: column;
    margin-bottom: vw(30);
    h4 {
      @include font(vw(48), 600, 10px, $greyBlue50);
    }
    div {
      span {
        margin-left: vw(5);
      }
    }
    span {
      @include font(vw(13), bold, 25px, $greyBlue70);
    }
  }
  &_second {
    @include flex();
    flex-direction: column;
    ul {
      margin-left: vw(10);
      list-style-type: none;
      li {
        margin-top: vw(9);
        display: flex;
        align-items: center;
        .lineStar {
          width: vw(280);
          height: vw(8);
          background: $greyBlue97;
          border-radius: 5px;
          position: relative;
          span {
            position: absolute;
            margin-left: vw(-0.75);
            height: 100%;
            width: vw(230);
            border-radius: 5px;
            background: $greyBlue85;
          }
        }
        .stars {
          margin-left: vw(35);
          svg {
            margin-left: vw(5);
          }
        }
        span {
          @include font(vw(13), bold, 25px, $greyBlue70);
          margin-left: vw(25);
        }
      }
    }
  }
}
@media screen and (max-width: 1281px) {
  .stars {
    margin-left: 1.1875vw !important;
  }
}
@media screen and (max-width: 1199px) {
  .stars {
    margin-left: 0.1875vw !important;
  }
}
@media screen and (max-width: 1067px) {
  .cart-rating_course {
    &_second {
      margin-bottom: vw(-21);
    }
  }
}
@media screen and (max-width: 925px) {
  .cart-rating_course {
    height: 19.9375vw;
    padding: 2.1875vw 1.5vw 4.625vw 2.3125vw;
  }
}
@media screen and (max-width: 871px) {
  .cart-rating_course {
    padding: 3.1875vw 0.5vw 4.625vw 2.3125vw;
  }
}
@media screen and (max-width: 835px) {
  .cart-rating_course {
    padding: 3.1875vw 0.5vw 3.625vw 1.3125vw;
    &_first {
      span {
        @include font(vw(19), bold, 25px, $greyBlue70);
      }
    }
    &_second {
      ul {
        li {
          span {
            @include font(vw(17), bold, 25px, $greyBlue70);
            margin-left: vw(25);
          }
        }
      }
    }
  }
}
@media screen and (max-width: 801px) {
  .cart-rating_course {
    padding: 2.1875vw 0.5vw 3.625vw 0.3125vw;
  }
}
@media screen and (max-width: 761px) {
  .cart-rating_course {
    &_second {
      ul {
        li {
          .lineStar {
            width: vw(260);
            span {
              width: vw(200);
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 717px){
  .cart-rating_course {
    display: flex;
    justify-content: space-between;
    &_second {
      ul {
        li {
          .lineStar {
            display: none;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 551px) {
  .cart-rating_course {
    height: 100vmin;
    width: 100%;
    display: block;
    padding: 2vmin 2vmin 2vmin 2vmin;
    background: $white;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(54, 61, 77, 0.05);
    margin-top: vmin(30);
    &_first {
      @include flex();
      flex-direction: column;
      margin-bottom: vmin(30);
      h4 {
        @include font(vmin(48), 600, 10px, $greyBlue50);
      }
      div {
        span {
          margin-left: vmin(5);
        }
      }
      span {
        @include font(vmin(13), bold, 25px, $greyBlue70);
      }
    }
    &_second {
      @include flex();
      flex-direction: column;
      ul {
        margin-left: vmin(10);
        list-style-type: none;
        li {
          margin-top: vmin(9);
          display: flex;
          align-items: center;
          .lineStar {
            width: vmin(200);
            height: vmin(8);
            background: $greyBlue97;
            border-radius: 5px;
            position: relative;
            span {
              position: absolute;
              margin-left: vmin(-0.75);
              height: 100%;
              width: vmin(150);
              border-radius: 5px;
              background: $greyBlue85;
            }
          }
          .stars {
            margin-left: vmin(35);
            svg {
              margin-left: vmin(5);
            }
          }
          span {
            @include font(vmin(13), bold, 25px, $greyBlue70);
            margin-left: vmin(25);
          }
        }
      }
    }
  }
}
@media screen and (max-width: 426px) {
  .cart-rating_course {
    &_first {
      margin-bottom: 1vmin;
    }
  }
}
@media screen and (max-width: 362px) {
  .cart-rating_course {
    height: 110vmin;
    &_first {
      margin-bottom: 0vmin;
    }
  }
}
@media screen and (max-width: 298px) {
  .cart-rating_course {
    height: 117vmin;
  }
}
@media screen and (max-width: 298px) {
  .cart-rating_course {
    &_first {
      span {
        @include font(vmin(18), bold, 25px, $greyBlue70);
      }
    }
    &_second {
      ul {
        li {
          span {
            @include font(vmin(17), bold, 25px, $greyBlue70);
          }
        }
      }
    }
  }
}
</style>

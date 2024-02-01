import React from "react";

function CalendarIcon({ fill }) {
  return (
    <svg
      width="24"
      height="28"
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
    <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.4109 3.75186L16.4119 4.57738C19.1665 4.81513 20.9862 6.88222 20.9891 10.0522L21 19.331C21.0039 22.7872 19.0322 24.9137 15.8718 24.9192L8.15188 24.9302C5.01119 24.9346 3.01482 22.7575 3.01087 19.2914L3.00001 10.1216C2.99606 6.93065 4.75153 4.86906 7.50617 4.59059L7.50518 3.76507C7.5042 3.28076 7.83001 2.91644 8.26444 2.91644C8.69886 2.91533 9.02468 3.27856 9.02567 3.76287L9.02666 4.53335L14.8914 4.52454L14.8904 3.75406C14.8894 3.26976 15.2152 2.90653 15.6497 2.90543C16.0742 2.90433 16.4099 3.26756 16.4109 3.75186ZM4.52146 10.4617L19.4696 10.4396V10.0544C19.4272 7.68792 18.349 6.44634 16.4138 6.26143L16.4148 7.10896C16.4148 7.58226 16.0801 7.95759 15.6556 7.95759C15.2211 7.95869 14.8943 7.58446 14.8943 7.11116L14.8933 6.2196L9.02862 6.22841L9.0296 7.11887C9.0296 7.59326 8.70477 7.9675 8.27035 7.9675C7.83592 7.9686 7.50912 7.59547 7.50912 7.12107L7.50813 6.27354C5.58284 6.48597 4.51751 7.73195 4.52048 10.1193L4.52146 10.4617ZM15.2399 15.4643V15.4764C15.2498 15.9827 15.625 16.3669 16.0801 16.3559C16.5244 16.3438 16.8789 15.9244 16.869 15.4181C16.8483 14.9338 16.4918 14.5386 16.0485 14.5397C15.5943 14.5507 15.2389 14.958 15.2399 15.4643ZM16.0554 20.4064C15.6013 20.3954 15.235 19.9782 15.234 19.4719C15.2241 18.9656 15.5884 18.5462 16.0426 18.5341H16.0525C16.5165 18.5341 16.8927 18.9513 16.8927 19.4686C16.8937 19.9859 16.5185 20.4053 16.0554 20.4064ZM11.1721 15.4819C11.1919 15.9882 11.568 16.3834 12.0222 16.3614C12.4665 16.3382 12.821 15.92 12.8012 15.4137C12.7903 14.9184 12.425 14.5331 11.9807 14.5342C11.5266 14.5562 11.1711 14.9756 11.1721 15.4819ZM12.0261 20.3569C11.572 20.3789 11.1968 19.9837 11.176 19.4774C11.176 18.9711 11.5305 18.5528 11.9847 18.5297C12.429 18.5286 12.7953 18.9139 12.8051 19.4081C12.8259 19.9155 12.4704 20.3338 12.0261 20.3569ZM7.1043 15.5204C7.12405 16.0268 7.50022 16.423 7.95439 16.3999C8.39869 16.3779 8.75314 15.9585 8.73241 15.4522C8.72253 14.9569 8.35722 14.5716 7.91194 14.5727C7.45777 14.5948 7.10332 15.0141 7.1043 15.5204ZM7.95836 20.3624C7.50419 20.3855 7.12901 19.9892 7.10827 19.4829C7.10728 18.9766 7.46272 18.5572 7.91689 18.5352C8.36119 18.5341 8.72749 18.9194 8.73736 19.4147C8.7581 19.921 8.40365 20.3404 7.95836 20.3624Z"
        fill={fill !== undefined ? fill : "#9A9AA9"}
    />
    </svg>
  );
}

export default CalendarIcon;

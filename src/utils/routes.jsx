import { css } from "styled-components";
import Overview from "../pages/Overview";

export const scrollStyle = css`
  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #d2d2d2;
  }
  &::-webkit-scrollbar-thumb {
    background: #1677ff9d;
  }
`;

export const routes = [
  { id: 0, link: "Components Overview", path: "/", element: <Overview /> },
  { id: 1, title: "General", element: <h1>General</h1> },
  { id: 3, link: "Button", path: "/btn", element: <h1>Button</h1> },
  {
    id: 4,
    link: "FloatButton",
    path: "/float-btn",
    element: <h1>FloatButton</h1>,
  },
  { id: 5, link: "Icon", path: "/icon", element: <h1>Icon</h1> },
  {
    id: 6,
    link: "Typography",
    path: "/typography",
    element: <h1>Typography</h1>,
  },
  { id: 7, title: "Layout", element: <h1>Layout</h1> },
  { id: 8, link: "Divider", path: "/divider", element: <h1>Divider</h1> },
  { id: 9, link: "Flex", path: "/flex", element: <h1>Flex</h1> },
  { id: 10, link: "Grid", path: "/grid", element: <h1>Grid</h1> },
  { id: 11, link: "Layout", path: "/layout", element: <h1>Layout</h1> },
  { id: 12, link: "Space", path: "/space", element: <h1>Space</h1> },
  { id: 13, title: "Navigation", element: <h1>Navigation</h1> },
  { id: 14, link: "Anchor", path: "/anchor", element: <h1>Anchor</h1> },
  {
    id: 15,
    link: "Breadcrumb",
    path: "/breadcrumb",
    element: <h1>Breadcrumb</h1>,
  },
  { id: 16, link: "Dropdown", path: "/dropdown", element: <h1>Dropdown</h1> },
  { id: 17, link: "Menu", path: "/menu", element: <h1>Menu</h1> },
  {
    id: 18,
    link: "Pagination",
    path: "/pagination",
    element: <h1>Pagination</h1>,
  },
  { id: 19, link: "Steps", path: "/steps", element: <h1>Steps</h1> },
  { id: 20, title: "Data Entry", element: <h1>Data</h1> },
  {
    id: 21,
    link: "AutoComplate",
    path: "/auto-complate",
    element: <h1>AutoComplate</h1>,
  },
  { id: 22, link: "Cascader", path: "/cascader", element: <h1>Cascader</h1> },
  { id: 23, link: "Checkbox", path: "/checkbox", element: <h1>Checkbox</h1> },
  {
    id: 24,
    link: "ColorPicker",
    path: "/color-picker",
    element: <h1>ColorPicker</h1>,
  },
  {
    id: 25,
    link: "DatePicker",
    path: "/date-picker",
    element: <h1>DatePicker</h1>,
  },
  { id: 26, link: "Form", path: "/form", element: <h1>Form</h1> },
  { id: 27, link: "Input", path: "/input", element: <h1>Input</h1> },
  {
    id: 28,
    link: "InputNumber",
    path: "/input-number",
    element: <h1>InputNumber</h1>,
  },
  { id: 29, link: "Mentions", path: "mentions", element: <h1>Mentions</h1> },
  { id: 30, link: "Radio", path: "/radio", element: <h1>Radio</h1> },
  { id: 31, link: "Rate", path: "/rate", element: <h1>Rate</h1> },
  { id: 32, link: "Select", path: "/select", element: <h1>Select</h1> },
  { id: 33, link: "Slider", path: "/slider", element: <h1>Slider</h1> },
  { id: 34, link: "Switch", path: "/switch", element: <h1>Switch</h1> },
  {
    id: 35,
    link: "TimePicker",
    path: "/time-picker",
    element: <h1>TimePicker</h1>,
  },
  { id: 36, link: "Transfer", path: "/transfer", element: <h1>Transfer</h1> },
  {
    id: 37,
    link: "TreeSelect",
    path: "/tree-select",
    element: <h1>TreeSelect</h1>,
  },
  { id: 38, link: "Upload", path: "/upload", element: <h1>Upload</h1> },
  { id: 39, title: "Data Display", element: <h1>Data</h1> },
  { id: 40, link: "Avatar", path: "/avatar", element: <h1>Avatar</h1> },
  { id: 41, link: "Badge", path: "/badge", element: <h1>Badge</h1> },
  { id: 42, link: "Calendar", path: "/calendar", element: <h1>Calendar</h1> },
  { id: 43, link: "Card", path: "/card", element: <h1>Card</h1> },
  { id: 44, link: "Carousel", path: "/carousel", element: <h1>Carousel</h1> },
  { id: 45, link: "Collapse", path: "/collapse", element: <h1>Collapse</h1> },
  {
    id: 46,
    link: "Descriptions",
    path: "/descriptions",
    element: <h1>Descriptions</h1>,
  },
  { id: 47, link: "Empty", path: "/empty", element: <h1>Empty</h1> },
  { id: 48, link: "Image", path: "/image", element: <h1>Image</h1> },
  { id: 49, link: "List", path: "/list", element: <h1>List</h1> },
  { id: 50, link: "Popover", path: "/popover", element: <h1>Popover</h1> },
  { id: 51, link: "QRCode", path: "/qr-code", element: <h1>QRCode</h1> },
  {
    id: 52,
    link: "Segmented",
    path: "/segmented",
    element: <h1>Segmented</h1>,
  },
  {
    id: 53,
    link: "Statistic",
    path: "/statistic",
    element: <h1>Statistic</h1>,
  },
  { id: 54, link: "Table", path: "/table", element: <h1>Table</h1> },
  { id: 55, link: "Tabs", path: "/tabs", element: <h1>Tabs</h1> },
  { id: 56, link: "Tag", path: "/tag", element: <h1>Tag</h1> },
  { id: 57, link: "Timeline", path: "/timeline", element: <h1>Timeline</h1> },
  { id: 58, link: "Tooltip", path: "/tooltip", element: <h1>Tooltip</h1> },
  { id: 59, link: "Tour", path: "/tour", element: <h1>Tour</h1> },
  { id: 60, link: "Tree", path: "/tree", element: <h1>Tree</h1> },
  { id: 61, title: "Feedback", element: <h1>Feedback</h1> },
  { id: 62, link: "Alert", path: "/alert", element: <h1>Alert</h1> },
  { id: 63, link: "Drawer", path: "/drawer", element: <h1>Drawer</h1> },
  { id: 64, link: "Message", path: "/message", element: <h1>Message</h1> },
  { id: 65, link: "Modal", path: "/modal", element: <h1>Modal</h1> },
  {
    id: 66,
    link: "Notification",
    path: "/notification",
    element: <h1>Notification</h1>,
  },
  {
    id: 67,
    link: "Popconfirm",
    path: "/popconfirm",
    element: <h1>Popconfirm</h1>,
  },
  { id: 68, link: "Progress", path: "/progress", element: <h1>Progress</h1> },
  { id: 69, link: "Result", path: "/result", element: <h1>Result</h1> },
  { id: 70, link: "Skeleton", path: "/skeleton", element: <h1>Skeleton</h1> },
  { id: 71, link: "Spin", path: "/spin", element: <h1>Spin</h1> },
  {
    id: 72,
    link: "Watermark",
    path: "/watermark",
    element: <h1>Watermark</h1>,
  },
  { id: 73, title: "Other", element: <h1>Other</h1> },
  { id: 74, link: "Affix", path: "/affix", element: <h1>Affix</h1> },
  { id: 75, link: "App", path: "/app", element: <h1>App</h1> },
  { id: 76, link: "Con", path: "/con", element: <h1>Con</h1> },
];

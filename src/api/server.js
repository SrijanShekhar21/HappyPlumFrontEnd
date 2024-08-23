// REST API integration
// export const BASE_SERVER_URL = "http://localhost:5000";
export const BASE_SERVER_URL = "https://happy-plum-backend-1-j2s6.onrender.com";
// ************************************ Web Api ***************************************

//manage user

export const MANAGE_USER_REGISTER = BASE_SERVER_URL + "/manageUser/register";
export const MANAGE_USER_LOGIN = BASE_SERVER_URL + "/manageUser/login";

//manage popup form

export const MANAGE_POPUP_FORM = BASE_SERVER_URL + "/popupform";

// ------------------------- student dashboard  ----------------------------

// homework
export const MANAGE_HOMEWORK_SUBMIT = BASE_SERVER_URL + "/homeworks/submit";
export const MANAGE_HOMEWORK_GET = BASE_SERVER_URL + "/homeworks/get";

// review sheet
export const MANAGE_REVIEWSHEET_SUBMIT =
  BASE_SERVER_URL + "/reviewsheet/submit";

// test assessment
export const MANAGE_TEST_ASSESSMENT_SUBMIT =
  BASE_SERVER_URL + "/test-assessment/submit";
export const MANAGE_TEST_ASSESSMENT_GET =
  BASE_SERVER_URL + "/test-assessment/get";

// Flash cards
export const MANAGE_FLASH_CARD_CREATE = BASE_SERVER_URL + "/flash-cards/create";
export const MANAGE_FLASH_CARD_GET = BASE_SERVER_URL + "/flash-cards/get";

// project
export const MANAGE_PROJECT_UPLOAD_CREATE = BASE_SERVER_URL + "/project/create";

// ------------------------- teacher dashboard  ----------------------------
// 2.3  progress-reports
export const MANAGE_PROGRESS_REPORT_CREATE =
  BASE_SERVER_URL + "/progress-report/create";
export const MANAGE_PROGRESS_REPORT__GET =
  BASE_SERVER_URL + "/progress-report/get";
export const MANAGE_ALL_STUDENTS__GET =
  BASE_SERVER_URL + "/progress-report/get-all-students";

// 1.3  communication-tools
export const MANAGE_PROFILES_GET =
  BASE_SERVER_URL + "/communication-tool/get-profiles";

// 1.1 class create and organization
export const MANAGE_CLASS_ORGANIZATION_CREATE =
  BASE_SERVER_URL + "/class-organization/create";
export const MANAGE_CLASS_ORGANIZATION_GET =
  BASE_SERVER_URL + "/class-organization/get";
export const MANAGE_CLASS_ORGANIZATION_DELETE =
  BASE_SERVER_URL + "/class-organization/delete";
export const MANAGE_CLASS_ORGANIZATION_UPDATE =
  BASE_SERVER_URL + "/class-organization/update";

export const MANAGE_ASSIGN_STUDENT_UPDATE =
  BASE_SERVER_URL + "/class-organization/update";
export const MANAGE_ASSIGN_STUDENT_DELETE =
  BASE_SERVER_URL + "/class-organization/delete";

//asignmentsss

export const MANAGE_ASSIGNMENT_CREATE = BASE_SERVER_URL + "/assignment/create";
export const MANAGE_ASSIGNMENT_GET = BASE_SERVER_URL + "/assignment/get";
export const MANAGE_ASSIGNMENT_DELETE = BASE_SERVER_URL + "/assignment/delete";
export const MANAGE_ASSIGNMENT_UPDATE = BASE_SERVER_URL + "/assignment/update";
export const MANAGE_ALL_HOMEWORK_GET =
  BASE_SERVER_URL + "/assignment/get-all-homework";
export const MANAGE_ALL_TEST_GET = BASE_SERVER_URL + "/assignment/get-all-test";
//messages
export const MANAGE_MESSAGE_GET = BASE_SERVER_URL + "/message/get";
export const MANAGE_MESSAGE_UPDATE = BASE_SERVER_URL + "/message/update";
export const MANAGE_MESSAGE_DELETE = BASE_SERVER_URL + "/message/delete";

export const MANAGE_ALL_USER_GET = BASE_SERVER_URL + "/message/get-all-users";
export const MANAGE_MESSAGE_CREATE = BASE_SERVER_URL + "/message/create";

//Resource
export const MANAGE_UPLOAD_SHARE_CREATE =
  BASE_SERVER_URL + "/resource/upload-share";
export const MANAGE_RESOURCE_GET = BASE_SERVER_URL + "/resource/get";
export const MANAGE_LESSON_CREATE = BASE_SERVER_URL + "/resource/create-lesson";

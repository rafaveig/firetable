"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var MailOutline_1 = __importDefault(require("@material-ui/icons/MailOutline"));
var CheckBox_1 = __importDefault(require("@material-ui/icons/CheckBox"));
var TextFormat_1 = __importDefault(require("@material-ui/icons/TextFormat"));
var Notes_1 = __importDefault(require("@material-ui/icons/Notes"));
var Phone_1 = __importDefault(require("@material-ui/icons/Phone"));
var Photo_1 = __importDefault(require("@material-ui/icons/Photo"));
var InsertDriveFileOutlined_1 = __importDefault(
  require("@material-ui/icons/InsertDriveFileOutlined")
);
var AttachFile_1 = __importDefault(require("@material-ui/icons/AttachFile"));
var Palette_1 = __importDefault(require("@material-ui/icons/Palette"));
var CalendarToday_1 = __importDefault(
  require("@material-ui/icons/CalendarToday")
);
var AccessTime_1 = __importDefault(require("@material-ui/icons/AccessTime"));
var StarHalf_1 = __importDefault(require("@material-ui/icons/StarHalf"));
var Explore_1 = __importDefault(require("@material-ui/icons/Explore"));
var Looks3_1 = __importDefault(require("@material-ui/icons/Looks3"));
var propEq_1 = __importDefault(require("ramda/es/propEq"));
var find_1 = __importDefault(require("ramda/es/find"));
var Select_1 = __importDefault(require("@material-ui/core/Select"));
var MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
var FieldType;
(function(FieldType) {
  FieldType["simpleText"] = "SIMPLE_TEXT";
  FieldType["longText"] = "LONG_TEXT";
  FieldType["email"] = "EMAIL";
  FieldType["PhoneNumber"] = "PHONE_NUMBER";
  FieldType["checkBox"] = "CHECK_BOX";
  FieldType["date"] = "DATE";
  FieldType["dateTime"] = "DATE_TIME";
  FieldType["number"] = "NUMBER";
  FieldType["url"] = "URL";
  FieldType["color"] = "COLOR";
  FieldType["rating"] = "RATING";
  FieldType["image"] = "IMAGE";
  FieldType["file"] = "FILE";
  FieldType["singleSelect"] = "SINGLE_SELECT";
  FieldType["multiSelect"] = "MULTI_SELECT";
  FieldType["documentSelect"] = "DOCUMENT_SELECT";
  FieldType["action"] = "ACTION";
  FieldType["last"] = "LAST";
})((FieldType = exports.FieldType || (exports.FieldType = {})));
exports.FIELDS = [
  {
    icon: react_1.default.createElement(TextFormat_1.default, null),
    name: "Simple Text",
    type: FieldType.simpleText,
  },
  {
    icon: react_1.default.createElement(Notes_1.default, null),
    name: "Long Text",
    type: FieldType.longText,
  },
  {
    icon: react_1.default.createElement(MailOutline_1.default, null),
    name: "Email",
    type: FieldType.email,
  },
  {
    icon: react_1.default.createElement(Phone_1.default, null),
    name: "Phone",
    type: FieldType.PhoneNumber,
  },
  {
    icon: react_1.default.createElement(CheckBox_1.default, null),
    name: "Check Box",
    type: FieldType.checkBox,
  },
  {
    icon: react_1.default.createElement(Looks3_1.default, null),
    name: "Number",
    type: FieldType.number,
  },
  {
    icon: react_1.default.createElement(CalendarToday_1.default, null),
    name: "Date",
    type: FieldType.date,
  },
  {
    icon: react_1.default.createElement(AccessTime_1.default, null),
    name: "Time",
    type: FieldType.dateTime,
  },
  {
    icon: react_1.default.createElement(Explore_1.default, null),
    name: "URL",
    type: FieldType.url,
  },
  {
    icon: react_1.default.createElement(StarHalf_1.default, null),
    name: "Rating",
    type: FieldType.rating,
  },
  {
    icon: react_1.default.createElement(Photo_1.default, null),
    name: "Image",
    type: FieldType.image,
  },
  {
    icon: react_1.default.createElement(AttachFile_1.default, null),
    name: "File",
    type: FieldType.file,
  },
  {
    icon: react_1.default.createElement(
      InsertDriveFileOutlined_1.default,
      null
    ),
    name: "Single Select",
    type: FieldType.singleSelect,
  },
  {
    icon: react_1.default.createElement(
      InsertDriveFileOutlined_1.default,
      null
    ),
    name: "Multi Select",
    type: FieldType.multiSelect,
  },
  {
    icon: react_1.default.createElement(
      InsertDriveFileOutlined_1.default,
      null
    ),
    name: "Doc Select",
    type: FieldType.documentSelect,
  },
  {
    icon: react_1.default.createElement(
      InsertDriveFileOutlined_1.default,
      null
    ),
    name: "Action",
    type: FieldType.action,
  },
  {
    icon: react_1.default.createElement(Palette_1.default, null),
    name: "Color",
    type: FieldType.color,
  },
];
exports.getFieldIcon = function(fieldType) {
  return find_1.default(propEq_1.default("type", fieldType))(exports.FIELDS)
    .icon;
};
exports.isFieldType = function(fieldType) {
  var fieldTypes = exports.FIELDS.map(function(field) {
    return field.type;
  });
  return fieldTypes.includes(fieldType);
};
exports.FieldsDropDown = function(value, onChange) {
  return react_1.default.createElement(
    Select_1.default,
    {
      value: value ? value : "",
      onChange: onChange,
      inputProps: {
        name: "type",
        id: "type",
      },
    },
    exports.FIELDS.map(function(field) {
      return react_1.default.createElement(
        MenuItem_1.default,
        {
          key: "select-field-" + field.name,
          id: "select-field-" + field.type,
          value: field.type,
        },
        react_1.default.createElement(
          react_1.default.Fragment,
          null,
          field.name
        )
      );
    })
  );
};
//# sourceMappingURL=index.js.map

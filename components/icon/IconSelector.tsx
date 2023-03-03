import { IconName } from "./IconName";
import { Adduser, Contact, Heart, Info, Product, Productlist, Setting, Userlist } from "./icons";
import { Edit } from "./icons";
import { Delete } from "./icons";
import { Close } from "./icons";
import { Logout} from "./icons";
import{Home} from "./icons"

export const getIcon = (iconName: IconName) => {
  switch (iconName) {
    case IconName.HEART:
      return (Heart);
    case IconName.EDIT:
      return (Edit);
    case IconName.DELETE:
      return (Delete);
    case IconName.CLOSE:
      return (Close);
    case IconName.LOGOUT:
      return (Logout);
      case IconName.HOME:
      return (Home);
      case IconName.USERLIST:
      return (Userlist);
      case IconName.ADDUSER:
      return (Adduser);
       case IconName.SETTING:
      return (Setting);
      case IconName.INFO:
      return (Info);
      case IconName.CONTACT:
      return (Contact);
      case IconName.PRODUCT:
      return (Product);
      case IconName.PRODUCTLIST:
      return (Productlist);
      default:
      return;
  }
}
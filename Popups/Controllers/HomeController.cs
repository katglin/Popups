using Popups.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Popups.Controllers
{
    public class HomeController : Controller
    {
        public JsonResult InitCollections()
        {
            #region CASE_1
            /// --------------------------------------------------------------------------------------------- ///
            /// Simple message with warning
            /// --------------------------------------------------------------------------------------------- ///
            /// Just show simple warning popup
            var WarningCase_Model_1 = new PopupModel() { Message = "Warning message", Color = PopupColor.Red, Order = 1, Type = PopupType.Warning };
            #endregion #region CASE_1

            #region CASE_2
            /// --------------------------------------------------------------------------------------------- ///
            /// Complex message with error & warning types
            /// --------------------------------------------------------------------------------------------- ///
            /// Show error message.
            /// if YES will be selected - break process of showing current collection of messages
            /// if NO will be selected - show next message
            var ErrorCase_Model_1 = new PopupModel() { Message = "Error message", Color = PopupColor.Red, Order = 1, Type = PopupType.Error };
            /// Just show simple warning popup
            var ErrorCase_Model_2 = new PopupModel() { Message = "Warning message", Color = PopupColor.Orange, Order = 2, Type = PopupType.Warning };
            #endregion #region CASE_2

            #region CASE_3
            /// --------------------------------------------------------------------------------------------- ///
            /// Complex message with denial type (based on action YES & NO) and Action
            /// --------------------------------------------------------------------------------------------- ///
            /// Just show simple warning popup
            var DenialCase_Model_1 = new PopupModel() { Message = "Warning message", Color = PopupColor.Orange, Order = 1, Type = PopupType.Warning };
            /// Show default popup.  By default popup will auto close in 5 sec (same as popup with ActionType = Default).
            /// When popup closes, show next message 
            var DenialCase_Model_2 = new PopupModel() { Message = "Default message", Color = PopupColor.Green, Order = 2, Type = PopupType.Default };
            /// Show denial popup.
            /// if YES will be selected - break process of showing current collection of messages and execute action
            /// if NO will be selected - show next message
            var DenialCase_Model_3 = new PopupModel()
            {
                Message = "Denial message",
                Color = PopupColor.Orange,
                Order = 3,
                Type = PopupType.Denial,
                /* IF YES - execute action */
                AType = ActionType.Execute,
                AEType = ActionExecuteType.Log
            };
            /// Just show simple information popup
            var DenialCase_Model_4 = new PopupModel() { Message = "Information message", Color = PopupColor.Blue, Order = 4, Type = PopupType.Info };
            #endregion CASE_3

            #region CASE_4
            /// --------------------------------------------------------------------------------------------- ///
            /// Complex message with denial & error
            /// --------------------------------------------------------------------------------------------- ///
            /// Show denial popup.
            /// if YES will be selected - break process of showing current collection of messages and execute action
            /// if NO will be selected - show next message
            var DenialErrorCase_Model_1 = new PopupModel()
            {
                Message = "Denial message",
                Color = PopupColor.Orange,
                Order = 1,
                Type = PopupType.Denial,
                /* IF YES - execute action */
                AType = ActionType.Execute,
                AEType = ActionExecuteType.Log
            };
            /// Just show simple information popup
            var DenialErrorCase_Model_2 = new PopupModel() { Message = "Information message", Color = PopupColor.Green, Order = 2, Type = PopupType.Info };
            /// Show error popup.
            /// if YES will be selected - break process of showing current collection of messages and execute action
            /// if NO will be selected - show next message
            var DenialErrorCase_Model_3 = new PopupModel()
            {
                Message = "Error message",
                Color = PopupColor.Red,
                Order = 3,
                Type = PopupType.Error,
                /* IF YES - execute action */
                AType = ActionType.Execute,
                AEType = ActionExecuteType.Log
            };
            /// Show default popup.
            /// When popup closes - execute action
            var DenialErrorCase_Model_4 = new PopupModel()
            {
                Message = "Default message",
                Color = PopupColor.Blue,
                Order = 4,
                Type = PopupType.Default,
                AType = ActionType.Execute,
                AEType = ActionExecuteType.Report
            };
            #endregion CASE_4

            /// Each collection of messages is processed separately in its stream 
            /// and messages from each collection are visible on the screen at the same time 
            /// (each collection uses its own pop-up container)
            var result = new List<List<PopupModel>>
            {
                new List<PopupModel>(){ WarningCase_Model_1 },
                new List<PopupModel>(){ ErrorCase_Model_1, ErrorCase_Model_2 },
                new List<PopupModel>(){ DenialCase_Model_1, DenialCase_Model_2, DenialCase_Model_3, DenialCase_Model_4 },
                new List<PopupModel>(){ DenialErrorCase_Model_1, DenialErrorCase_Model_2, DenialErrorCase_Model_3, DenialErrorCase_Model_4 }
            };
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Index()
        {
            return View();
        }
    }
}
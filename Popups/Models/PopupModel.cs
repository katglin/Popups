using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Popups.Models
{
    public class PopupModel
    {
        /// <summary>
        /// Contains popup message
        /// </summary>
        public string Message { get; set; }

        /// <summary>
        /// Contains popup type
        /// </summary>
        public PopupType Type { get; set; }

        /// <summary>
        /// Contains popup color
        /// </summary>
        public PopupColor Color { get; set; }

        /// <summary>
        /// Сontains popup display order
        /// </summary>
        public int Order { get; set; }

        /// <summary>
        /// Сontains action type for popup
        /// </summary>
        public ActionType AType { get; set; }

        /// <summary>
        /// Contains execution type for action
        /// </summary>
        public ActionExecuteType? AEType { get; set; }
    }
}
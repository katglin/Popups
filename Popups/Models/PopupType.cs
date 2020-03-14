using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Popups.Models
{
    public enum PopupType
    {
        Default = 0,    // contains nothing (w/o buttons), by default popup will auto close in 5 sec (same as popup with ActionType = Default) 
        Info = 1,    // contains OK button
        Warning = 2,    // contains OK button
        Error = 3,    // contains YES & NO buttons, if YES - break process of showing current collection of messages
        Denial = 4,    // contains YES & NO buttons, if YES - break process of showing current collection of messages
        Confirmation = 5,    // contains YES button
    }
}
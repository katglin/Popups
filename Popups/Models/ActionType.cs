using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Popups.Models
{
    public enum ActionType
    {
        Default = 0,    // do nothing (popup will auto close in 5 sec)
        Execute = 1     // requires to execute action (async action)
    }
}
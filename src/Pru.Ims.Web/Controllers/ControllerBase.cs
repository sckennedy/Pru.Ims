using Microsoft.AspNetCore.Mvc;

namespace Pru.Ims.Web.Controllers
{
    public class ControllerBase : Controller
    {
        // GET
        public IActionResult Index()
        {
            return
            View();
        }
    }
}
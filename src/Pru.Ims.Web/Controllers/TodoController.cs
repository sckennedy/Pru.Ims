using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Pru.Ims.Web.Controllers
{
    [Route("api/[controller]")]
    public class TodoController : Controller
    {
        // Handles GET /api/todo
        [HttpGet]
        public async Task<IActionResult> GetAllTodos()
        {
            // TODO: Get to-do items and return to frontend
        }
    }
}

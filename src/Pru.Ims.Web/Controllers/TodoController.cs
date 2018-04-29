using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Pru.Ims.Core.Services;

namespace Pru.Ims.Web.Controllers
{
    [Route("api/[controller]")]
    public class TodoController : Controller
    {
        private readonly ITodoItemService _todoItemService;

        public TodoController(ITodoItemService todoItemService)
        {
            _todoItemService = todoItemService;
        }

        // Handles GET /api/todo
        [HttpGet]
        public async Task<IActionResult> GetAllTodos()
        {
            var userId = "123";
            var todos = await _todoItemService.GetItems(userId);

            return Ok(todos);
        }
    }
}

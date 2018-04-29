using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Pru.Ims.Core.Services;

namespace Pru.Ims.Core.Implementation.Services
{
    public class FakeTodoItemService : ITodoItemService
    {
        public Task<IEnumerable<TodoItem>> GetItems(string userId)
        {
            var todos = new[]
            {
                new TodoItem { Text = "Learn Vue.js", Completed = true },
                new TodoItem { Text = "Learn ASP.NET Core" }
            };

            return Task.FromResult(todos.AsEnumerable());
        }

        public Task AddItem(string userId, string text)
        {
            throw new NotImplementedException();
        }

        public Task UpdateItem(string userId, Guid id, TodoItem updatedData)
        {
            throw new NotImplementedException();
        }

        public Task DeleteItem(string userId, Guid id)
        {
            throw new NotImplementedException();
        }
    }
}
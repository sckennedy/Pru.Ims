using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Pru.Ims.Core.Services
{
    public interface ITodoItemService
    {
        Task<IEnumerable<TodoItem>> GetItems(string userId);

        Task AddItem(string userId, string text);

        Task UpdateItem(string userId, Guid id, TodoItem updatedData);

        Task DeleteItem(string userId, Guid id);
    }
}
using System;

namespace Pru.Ims.Core
{
    public class TodoItem
    {
        public Guid Id { get; set; }

        public string Text { get; set; }

        public bool Completed { get; set; }
        
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PassPassAPI.Models
{
    public class PasswordSaveResult
    {
        public bool Success { get; set; }
        public Guid New_Id { get; set; }
    }
}

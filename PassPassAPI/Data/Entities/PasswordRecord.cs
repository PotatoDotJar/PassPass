using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PassPassAPI.Data.Entities
{
    public class PasswordRecord
    {
        public Guid Id { get; set; }
        public string Created_By_IP { get; set; }
        public DateTime Created { get; set; }
        public string Label { get; set; }
        public string Password { get; set; }
    }
}

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PassPassAPI.Data;
using PassPassAPI.Data.Entities;
using PassPassAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PassPassAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PasswordManagementController : ControllerBase
    {
        private readonly ILogger<PasswordManagementController> _logger;

        private readonly PasswordDbContext _dbContext;

        public PasswordManagementController(ILogger<PasswordManagementController> logger, PasswordDbContext dbContext)
        {
            _logger = logger;
            _dbContext = dbContext;
        }

        [HttpGet("{id}")]
        public ActionResult<PasswordRecord> GetRecord(Guid id)
        {
            if (id == Guid.Empty)
                return BadRequest();

            var record = _dbContext.PasswordRecords.Find(id);

            if(record == null)
            {
                return NotFound();
            }

            return Ok(record);
        }

        [HttpPost("Save")]
        public ActionResult<PasswordSaveResult> Save(PasswordSaveModel data)
        {
            var newEntry = new PasswordRecord()
            {
                Label = data.Label,
                Password = data.Password,
                Created = DateTime.Now,
                Created_By_IP = HttpContext.Request.Host.Value
            };

            _dbContext.PasswordRecords.Add(newEntry);
            _dbContext.SaveChanges();

            return Ok(new PasswordSaveResult() { Success = true, New_Id = newEntry.Id });
        }

    }

    public class PasswordSaveModel
    {
        public string Label { get; set; }
        public string Password { get; set; }
    }
}

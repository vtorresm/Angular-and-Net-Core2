using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using angular.api.Models;
using Microsoft.AspNetCore.Mvc;

namespace angular.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            return Ok(new {
                Nombre = "Pedro",
                Apellido = "Perez",
                Email = "test@test.com"
            });
        }

        [HttpPost("adduser")]
        public ActionResult Adduser([FromBody] UserViewModel user)
        {
            return Ok();
           
        }


    }
}

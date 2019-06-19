using angular.api.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

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

        // GET api/values/5
        [HttpGet("users")]
        public ActionResult GetUsers()
        {
            List<UserViewModel> users = new List<UserViewModel>();

            users.Add(new UserViewModel
            {
                Nombre = "Alex",
                Apellido = "Torres",
                Email = "test@test.com"
            });

            users.Add(new UserViewModel
            {
                Nombre = "Olga",
                Apellido = "Duarte",
                Email = "test@test.com"
            });

            users.Add(new UserViewModel
            {
                Nombre = "Rodrigo",
                Apellido = "Lopez",
                Email = "test@test.com"
            });

            return Ok(users);
        }

        [HttpPost("adduser")]
        public ActionResult Adduser([FromBody] UserViewModel user)
        {
            return Ok();
           
        }


    }
}

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Server.Model;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlanetController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAllPlanet()
        {
            List<Planets> planets = new List<Planets>() {
            new Planets { Id= 1, Name="Mercury",Diameter = 200000},
            new Planets { Id = 2, Name = "Venus", Diameter = 100000 },
            new Planets { Id= 3, Name="Earth",Diameter = 200000},
            new Planets { Id = 4, Name = "Mars", Diameter = 300000 },
            new Planets { Id= 5, Name="Yupiter",Diameter = 500000},
            new Planets { Id = 6, Name = "Saturn", Diameter = 100000 },
            new Planets { Id= 7, Name="Uranus",Diameter = 200000},
            new Planets { Id = 8, Name = "Neptune", Diameter = 300000 },
            };

            return Ok(planets);
        }
    }
}

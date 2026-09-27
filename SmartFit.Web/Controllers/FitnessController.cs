using Microsoft.AspNetCore.Mvc;
using SmartFit.Web.Models;
using System.Reflection.Metadata.Ecma335;
namespace SmartFit.Web.Controllers
{
    public class FitnessController : Controller
    {
        public IActionResult Profile()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Profile(FitnessProfile profile)
        {
            return View(profile);
        }
    }
}

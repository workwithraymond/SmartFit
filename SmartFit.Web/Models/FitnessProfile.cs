namespace SmartFit.Web.Models
{
    public class FitnessProfile
    {
        public string Name { get; set; } = "";

        public decimal Weight { get; set; } 

        public int HeightFeet { get; set; }

        public int HeightInches {  get; set; }

        public int Age { get; set; }

        public string Goal { get; set; } = "";

        public int TrainingDaysPerWeek { get; set; }

        public string ActivityLevel { get; set; } = "";

        public string ExperienceLevel { get; set; } = "";

        public string WorkoutLocation { get; set; } = "";

    }
}

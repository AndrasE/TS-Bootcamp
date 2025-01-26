class CourseService {
  private static INSTANCE: CourseService;

  private constructor() {
    console.log("CourseService initialized");
  }
  static instance() {
    if (!CourseService.INSTANCE) {
      CourseService.INSTANCE = new CourseService();
    }
    return CourseService.INSTANCE;
  }
}

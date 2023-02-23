const mapQuestionnaires = () => {
    let questions = [];
    const FIRST_INDEX = 0;

    questionnaire.Groups.forEach((item) => {
        const newQuestions = item.Steps[`${FIRST_INDEX}`].Questions;
        questions = questions.concat(newQuestions);
    });

    questionnaire.Groups.reduce((questions, group) => {
        const question = group.Steps[`${FIRST_INDEX}`].Questions;

        return {
            ...questions,
            questionl
        }
    }, []);

    return questions;
}
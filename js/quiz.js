/**
 * The Languages Academy - Interactive Placement Quizzes
 */

const QUIZ_DATA = {
  ingles: {
    title: "Teste de Nível de Inglês",
    description: "Avalie suas habilidades em gramática, vocabulário e compreensão em inglês (CEFR A1 - C1).",
    flag: "🇺🇸",
    questions: [
      {
        q: "1. Where _____ you from?",
        options: ["is", "are", "do", "be"],
        answer: 1,
        explanation: "Usamos 'are' para o pronome 'you' no presente do verbo to be."
      },
      {
        q: "2. Yesterday, she _____ to the office by bicycle.",
        options: ["go", "gone", "went", "goes"],
        answer: 2,
        explanation: "O passado simples do verbo irregular 'go' é 'went'."
      },
      {
        q: "3. I have lived in this city _____ three years.",
        options: ["since", "for", "during", "ago"],
        answer: 1,
        explanation: "Usamos 'for' para indicar duração de tempo ('for three years')."
      },
      {
        q: "4. If it _____ tomorrow, we will cancel the picnic.",
        options: ["rain", "rains", "will rain", "rained"],
        answer: 1,
        explanation: "Primeira condicional: 'if' + presente simples ('rains'), futuro simples na oração principal."
      },
      {
        q: "5. She is looking forward to _____ her new colleagues.",
        options: ["meet", "meeting", "met", "have met"],
        answer: 1,
        explanation: "A expressão 'look forward to' é seguida de gerúndio (-ing)."
      },
      {
        q: "6. The report _____ by the end of next week.",
        options: ["will finish", "will have finished", "will be finished", "has finished"],
        answer: 2,
        explanation: "Voz passiva no futuro: 'will be finished'."
      },
      {
        q: "7. By the time the movie ended, we _____ all the popcorn.",
        options: ["had eaten", "have eaten", "ate", "were eating"],
        answer: 0,
        explanation: "Passado perfeito ('had eaten') para uma ação anterior a outra no passado."
      },
      {
        q: "8. He denied _____ the confidential documents.",
        options: ["to leak", "leaking", "have leaked", "leak"],
        answer: 1,
        explanation: "O verbo 'deny' é seguido de gerúndio (-ing)."
      },
      {
        q: "9. Hardly _____ into the house when the phone began to ring.",
        options: ["I had stepped", "had I stepped", "did I step", "was I stepping"],
        answer: 1,
        explanation: "Inversão enfática com advérbio negativo inicial: 'Hardly had I stepped...'."
      },
      {
        q: "10. Had you informed us in advance, we _____ the schedule.",
        options: ["would adjust", "will adjust", "would have adjusted", "had adjusted"],
        answer: 2,
        explanation: "Terceira condicional invertida: 'Had you informed... we would have adjusted'."
      }
    ]
  },
  espanol: {
    title: "Prueba de Nivel de Español",
    description: "Evalúa tu dominio del español desde nivel inicial hasta avanzado (MCER A1 - C1).",
    flag: "🇪🇸",
    questions: [
      {
        q: "1. Hola, ¿cómo _____?",
        options: ["te llamas", "se llama", "te llama", "te llamas tú"],
        answer: 0,
        explanation: "Para la segunda persona informal (tú) se usa el verbo pronominal 'te llamas'."
      },
      {
        q: "2. El fin de semana pasado mis amigos y yo _____ al cine.",
        options: ["vamos", "fuimos", "íbamos", "fueron"],
        answer: 1,
        explanation: "Pretérito perfecto simple en primera persona del plural (nosotros): 'fuimos'."
      },
      {
        q: "3. Cuando era niño, siempre _____ en el parque después de clases.",
        options: ["jugué", "jugaba", "he jugado", "jugué siempre"],
        answer: 1,
        explanation: "Pretérito imperfecto ('jugaba') para acciones habituales en el pasado."
      },
      {
        q: "4. No creo que él _____ la respuesta correcta.",
        options: ["sabe", "sepa", "supo", "sabría"],
        answer: 1,
        explanation: "La negación de verbos de opinión/creencia exige subjuntivo: 'no creo que sepa'."
      },
      {
        q: "5. Te llamaré en cuanto _____ a casa.",
        options: ["llego", "llegué", "llegue", "llegaré"],
        answer: 2,
        explanation: "Conectores temporales con sentido de futuro requieren presente de subjuntivo ('llegue')."
      },
      {
        q: "6. Si _____ más tiempo, estudiaría otro idioma.",
        options: ["tuviera", "tengo", "tendría", "habría tenido"],
        answer: 0,
        explanation: "Condicional tipo 2: Si + imperfecto de subjuntivo ('tuviera') + condicional simple."
      },
      {
        q: "7. A Juan no le gusta el café, pero a mí _____.",
        options: ["también", "tampoco", "sí", "no"],
        answer: 2,
        explanation: "Para contrastar una afirmación frente a una negación previa se usa 'a mí sí'."
      },
      {
        q: "8. El documento ya ha sido revisado _____ el comité directivo.",
        options: ["para", "por", "de", "hacia"],
        answer: 1,
        explanation: "En la voz pasiva, el complemento agente se introduce con la preposición 'por'."
      },
      {
        q: "9. De haberlo sabido antes, no _____ ese error.",
        options: ["cometería", "cometía", "habría cometido", "hubiera de cometer"],
        answer: 2,
        explanation: "Estructura condicional compuesta: 'De haberlo sabido... habría cometido'."
      },
      {
        q: "10. Por más que _____ explicárselo, se negó a escuchar razones.",
        options: ["intentó", "intentaba", "intenté", "haya intentado"],
        answer: 2,
        explanation: "Concesiva en pasado que relata un hecho constatado: 'intenté'."
      }
    ]
  },
  portugues: {
    title: "Teste de Nível de Português",
    description: "Avalie seu conhecimento do português brasileiro, gramática e uso real da língua.",
    flag: "🇧🇷",
    questions: [
      {
        q: "1. Nós _____ estudantes da The Languages Academy.",
        options: ["somos", "estamos", "é", "são"],
        answer: 0,
        explanation: "Concordância com 'nós' no presente do indicativo do verbo ser: 'somos'."
      },
      {
        q: "2. Ontem eu _____ com o professor sobre o meu progresso.",
        options: ["falo", "falei", "falava", "falado"],
        answer: 1,
        explanation: "Pretérito perfeito do indicativo para ação concluída no passado: 'falei'."
      },
      {
        q: "3. Se você _____ tempo hoje, podemos revisar o conteúdo.",
        options: ["ter", "tiver", "tinha", "tenha"],
        answer: 1,
        explanation: "Futuro do subjuntivo após a conjunção condicional 'se': 'se você tiver'."
      },
      {
        q: "4. É fundamental que todos os alunos _____ pontuais.",
        options: ["são", "sejam", "serem", "fossem"],
        answer: 1,
        explanation: "Expressão impessoal de necessidade ('é fundamental que') exige presente do subjuntivo: 'sejam'."
      },
      {
        q: "5. Faz três anos que nós _____ no Brasil.",
        options: ["moramos", "morávamos", "temos morado", "moramos desde"],
        answer: 0,
        explanation: "No português brasileiro atual, usa-se o presente para indicar ação iniciada no passado que perdura: 'moramos'."
      },
      {
        q: "6. Quando nós _____ a Gramado, avisaremos com antecedência.",
        options: ["iremos", "formos", "vamos", "fôssemos"],
        answer: 1,
        explanation: "Futuro do subjuntivo do verbo ir com o pronome nós: 'quando formos'."
      },
      {
        q: "7. Ela pediu para eu _____ o relatório antes da reunião.",
        options: ["enviar", "envie", "enviado", "enviando"],
        answer: 0,
        explanation: "Infinitivo pessoal / preposição 'para eu' seguida do infinitivo: 'enviar'."
      },
      {
        q: "8. Embora o teste _____ desafiador, ele conseguiu uma ótima nota.",
        options: ["foi", "fosse", "tenha sido", "seria"],
        answer: 1,
        explanation: "A conjunção concessiva 'embora' rege verbo no modo subjuntivo ('fosse' / 'tivesse sido')."
      },
      {
        q: "9. Não _____ a atenção com notificações durante a aula.",
        options: ["perde", "perca", "perdeu", "perdendo"],
        answer: 1,
        explanation: "Imperativo negativo para 'você': 'Não perca'."
      },
      {
        q: "10. Se tivéssemos saído mais cedo, não _____ pegado tanto trânsito.",
        options: ["teríamos", "tínhamos", "tivéssemos", "havíamos"],
        answer: 0,
        explanation: "Condicional composto / futuro do pretérito composto: 'não teríamos pegado'."
      }
    ]
  }
};

function initQuiz(langKey) {
  const data = QUIZ_DATA[langKey];
  if (!data) return;

  const quizContainer = document.getElementById('quizApp');
  if (!quizContainer) return;

  let currentIdx = 0;
  let userAnswers = new Array(data.questions.length).fill(null);

  function renderQuestion() {
    const qData = data.questions[currentIdx];
    const progressPercent = ((currentIdx + 1) / data.questions.length) * 100;

    quizContainer.innerHTML = `
      <div class="quiz-wrapper" style="max-width: 680px; margin: 0 auto; background: #fff; padding: 2.5rem; border-radius: 20px; box-shadow: 0 10px 30px rgba(15, 58, 145, 0.08); border: 1px solid #E2E8F0;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.5rem;">
          <span style="font-weight: 700; color: #0F3A91; font-size: 0.95rem;">
            ${data.flag} Questão ${currentIdx + 1} de ${data.questions.length}
          </span>
          <span style="font-size: 0.85rem; font-weight: 600; color: #64748B;">
            ${Math.round(progressPercent)}% Concluído
          </span>
        </div>

        <div style="background: #EEF2F6; height: 8px; border-radius: 999px; overflow: hidden; margin-bottom: 2rem;">
          <div style="background: linear-gradient(90deg, #1657D9, #20BED4); width: ${progressPercent}%; height: 100%; transition: width 0.3s ease;"></div>
        </div>

        <h3 style="font-size: 1.25rem; margin-bottom: 1.5rem; color: #1E293B; line-height: 1.4;">
          ${qData.q}
        </h3>

        <div class="quiz-options" style="display: flex; flex-direction: column; gap: 0.85rem; margin-bottom: 2rem;">
          ${qData.options.map((opt, idx) => `
            <button type="button" class="quiz-opt-btn ${userAnswers[currentIdx] === idx ? 'selected' : ''}" data-idx="${idx}" style="
              text-align: left;
              padding: 1rem 1.25rem;
              border-radius: 12px;
              border: 2px solid ${userAnswers[currentIdx] === idx ? '#0F3A91' : '#E2E8F0'};
              background: ${userAnswers[currentIdx] === idx ? '#EFF6FF' : '#FFFFFF'};
              color: ${userAnswers[currentIdx] === idx ? '#0F3A91' : '#334155'};
              font-size: 1rem;
              font-weight: ${userAnswers[currentIdx] === idx ? '600' : '400'};
              cursor: pointer;
              transition: all 0.2s ease;
            ">
              <span style="display:inline-block; width: 26px; height: 26px; line-height: 24px; text-align: center; border-radius: 50%; background: ${userAnswers[currentIdx] === idx ? '#0F3A91' : '#F1F5F9'}; color: ${userAnswers[currentIdx] === idx ? '#fff' : '#64748B'}; font-size: 0.85rem; font-weight: 700; margin-right: 0.75rem;">
                ${String.fromCharCode(65 + idx)}
              </span>
              ${opt}
            </button>
          `).join('')}
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; pt-4; border-top: 1px solid #F1F5F9; padding-top: 1.25rem;">
          <button type="button" id="prevBtn" class="btn btn-outline" style="padding: 0.6rem 1.2rem; font-size: 0.9rem;" ${currentIdx === 0 ? 'disabled style="opacity:0.5; pointer-events:none;"' : ''}>
            ← Anterior
          </button>
          <button type="button" id="nextBtn" class="btn btn-primary" style="padding: 0.6rem 1.4rem; font-size: 0.9rem;">
            ${currentIdx === data.questions.length - 1 ? 'Finalizar Teste ✓' : 'Próxima →'}
          </button>
        </div>
      </div>
    `;

    // Bind option click
    quizContainer.querySelectorAll('.quiz-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const selected = parseInt(btn.getAttribute('data-idx'));
        userAnswers[currentIdx] = selected;
        renderQuestion();
      });
    });

    document.getElementById('prevBtn')?.addEventListener('click', () => {
      if (currentIdx > 0) {
        currentIdx--;
        renderQuestion();
      }
    });

    document.getElementById('nextBtn')?.addEventListener('click', () => {
      if (userAnswers[currentIdx] === null) {
        alert('Por favor, selecione uma opção antes de avançar.');
        return;
      }
      if (currentIdx < data.questions.length - 1) {
        currentIdx++;
        renderQuestion();
      } else {
        renderResults();
      }
    });
  }

  function renderResults() {
    let score = 0;
    data.questions.forEach((q, i) => {
      if (userAnswers[i] === q.answer) score++;
    });

    let level = "A1 - Iniciante";
    let desc = "Você está dando os primeiros passos! As aulas particulares vão acelerar sua confiança do zero.";
    let color = "#3B82F6";

    if (score >= 9) {
      level = "C1 - Avançado / Fluente";
      desc = "Excelente domínio da gramática complexa e estruturas da língua. Aulas de conversação avançada e refinamento profissional são ideais para você!";
      color = "#10B981";
    } else if (score >= 7) {
      level = "B2 - Intermediário Superior";
      desc = "Ótima base gramatical e vocabulário sólido! Você já consegue se comunicar bem e só precisa de fluência e naturalidade.";
      color = "#059669";
    } else if (score >= 5) {
      level = "B1 - Intermediário";
      desc = "Você compreende as principais estruturas e situações do cotidiano. Com aulas focadas em conversação, você alcançará o próximo nível rápido!";
      color = "#F59E0B";
    } else if (score >= 3) {
      level = "A2 - Básico Consolidado";
      desc = "Você tem noções importantes, mas ainda precisa consolidar tempos verbais e segurança ao falar.";
      color = "#F97316";
    }

    const shareMsg = `Olá, Luis! Realizei o ${data.title} no site The Languages Academy.%0A%0A*Minha Pontuação:* ${score}/${data.questions.length}%0A*Nível Estimado:* ${encodeURIComponent(level)}%0A%0AGostaria de agendar minha aula experimental gratuita para conversarmos sobre meu plano de estudos!`;

    quizContainer.innerHTML = `
      <div style="max-width: 680px; margin: 0 auto; background: #fff; padding: 3rem 2.5rem; border-radius: 24px; box-shadow: 0 15px 40px rgba(15, 58, 145, 0.12); border: 2px solid #E2E8F0; text-align: center;">
        <div style="font-size: 3.5rem; margin-bottom: 0.5rem;">🎉</div>
        <h2 style="font-size: 2rem; color: #071D48; margin-bottom: 0.5rem;">Teste Concluído!</h2>
        <p style="color: #64748B; margin-bottom: 2rem;">Confira seu resultado para o ${data.title}:</p>

        <div style="background: #F8FAFC; border-radius: 20px; padding: 2rem; border: 1px solid #E2E8F0; margin-bottom: 2.5rem;">
          <div style="font-size: 0.9rem; text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em; color: #64748B; margin-bottom: 0.5rem;">Seu Nível Estimado</div>
          <div style="font-size: 2rem; font-weight: 800; color: ${color}; margin-bottom: 0.5rem;">${level}</div>
          <div style="display: inline-block; background: #EEF2F6; color: #334155; font-weight: 700; padding: 0.35rem 1.2rem; border-radius: 999px; margin-bottom: 1rem; font-size: 0.95rem;">
            Pontuação: ${score} de ${data.questions.length} acertos (${Math.round((score/data.questions.length)*100)}%)
          </div>
          <p style="color: #475569; font-size: 1rem; line-height: 1.6; max-width: 520px; margin: 0 auto;">
            ${desc}
          </p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center;">
          <a href="https://wa.me/5554991863491?text=${shareMsg}" target="_blank" class="btn btn-whatsapp" style="width: 100%; max-width: 440px; padding: 1rem 1.5rem; font-size: 1.05rem;">
            💬 Enviar Resultado e Agendar Aula Grátis
          </a>
          <button type="button" onclick="location.reload()" class="btn btn-outline" style="width: 100%; max-width: 440px; padding: 0.75rem 1.5rem;">
            🔄 Refazer Teste
          </button>
          <a href="index.html" style="font-size: 0.9rem; color: #64748B; margin-top: 0.5rem; text-decoration: underline;">
            ← Voltar para a página inicial
          </a>
        </div>
      </div>
    `;
  }

  // Start
  renderQuestion();
}

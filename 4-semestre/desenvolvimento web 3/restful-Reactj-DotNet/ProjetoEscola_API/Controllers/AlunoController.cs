using Microsoft.AspNetCore.Mvc;
using ProjetoEscola_API.Data;
using ProjetoEscola_API.Models;


namespace ProjetoEscola_API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AlunoController : Controller
    {

        private readonly EscolaContext _context;
        public AlunoController(EscolaContext context)
        {
            //construtor
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Aluno>> GetAll()
        {
            if (_context.Aluno is not null)
            {
                return _context.Aluno.ToList();
            }
            else
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, 
                "Falha no acesso ao banco de dados.");
            }
        }

        [ActionName("AlunoId")]
        [HttpGet("{AlunoId}")]
        public ActionResult<List<Aluno>> GetId(int AlunoId)
        {

            if (_context.Aluno is not null)
            {
                var result = _context.Aluno.Find(AlunoId);
                if (result == null)
                {
                    return NotFound();
                }
                return Ok(result);
            }
            else
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                "Falha no acesso ao banco de dados.");

            }

        }

        [HttpPost]
        public async Task<ActionResult> post(Aluno model)
        {
            try
            {
                _context.Aluno.Add(model);
                if (await _context.SaveChangesAsync() == 1)
                {
                    //return Ok();
                    return Created($"/api/aluno/{model.ra}", model);
                }
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, 
                "Falha no acesso ao banco de dados.");
            }
            // retorna BadRequest se não conseguiu incluir
            return BadRequest();
        }
        [ActionName("AlunoNome")]
        [HttpGet("{AlunoNome}")]
        public ActionResult<List<Aluno>> GetAlunoNome(string AlunoNome){

            if(_context.Aluno is not null){
                var result = _context.Aluno.Where(a => a.nome == AlunoNome);
                if(result == null){
                    return NotFound();
                }else{
                    return Ok(result);
                }
           
            }else{
                return this.StatusCode(StatusCodes.Status500InternalServerError, 
                "Falha no acesso ao banco de dados.");
            }
        }

        [HttpPut("{AlunoId}")]
        public async Task<IActionResult> put(int AlunoId, Aluno dadosAlunoAlt)
        {
            try
            {
                //verifica se existe aluno a ser alterado
                var result = await _context.Aluno.FindAsync(AlunoId);
                if (AlunoId != result.id)
                {
                    return BadRequest();
                }
                result.ra = dadosAlunoAlt.ra;
                result.nome = dadosAlunoAlt.nome;
                result.codCurso = dadosAlunoAlt.codCurso;
                await _context.SaveChangesAsync();
                return Created($"/api/aluno/{dadosAlunoAlt.ra}", dadosAlunoAlt);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falhano acesso ao banco de dados.");
            }
        }

        [HttpDelete("{AlunoId}")]
        public async Task<ActionResult> delete(int AlunoId)
        {
            try
            {
                //verifica se existe aluno a ser excluído
                var aluno = await _context.Aluno.FindAsync(AlunoId);
                if (aluno == null)
                {
                    //método do EF
                    return NotFound();
                }
                _context.Remove(aluno);
                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }
    }
}

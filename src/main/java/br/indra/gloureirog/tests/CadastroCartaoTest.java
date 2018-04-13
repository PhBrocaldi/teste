package br.indra.gloureirog.tests;

import static br.indra.gloureirog.core.DriverFactory.getDriver;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import br.indra.gloureirog.core.BasePage;
import br.indra.gloureirog.core.DriverFactory;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class CadastroCartaoTest {

	BasePage page = new BasePage();
	
	/*---- CT01 ----*/

	@Given("^CT01 - Acceder la Página principal$")
	public void acessarPaginaCadastro() throws Throwable {
		getDriver().get("http://www.bancoripley.com.pe/bancoripley/home/index.html");
	}

	@When("^CT01 - Acceda la página de tarjetas$")
	public void realizaBusca() throws InterruptedException
	{
		Thread.sleep(5000);
		WebElement we = DriverFactory.getDriver().findElement(By.id("m_creditos"));
		WebElement wd = DriverFactory.getDriver().findElement(By.id("MMMenu0805194703_0_Item_0"));

		String mouseOverScript =
				"if(document.createEvent){var evObj = document.createEvent('MouseEvents');" 
			    +"evObj.initEvent('mouseover',true, false); arguments[0].dispatchEvent(evObj);} " 
			    +"else if(document.createEventObject) { arguments[0].fireEvent('onmouseover');}";

		((JavascriptExecutor) DriverFactory.getDriver()).executeScript(mouseOverScript, we);
		Thread.sleep(1000);
		((JavascriptExecutor) DriverFactory.getDriver()).executeScript(mouseOverScript,  wd);
		Thread.sleep(1000);
		((JavascriptExecutor) DriverFactory.getDriver()).executeScript("arguments[0].click();", wd);
	}


	@When("^CT01 - Añadir DNI \"(.*?)\" válido$")
	public void inserirDni(String dni) throws Throwable {
		Thread.sleep(5000);
		WebElement we = DriverFactory.getDriver().findElement(By.id("m_creditos"));
		WebElement wd = DriverFactory.getDriver().findElement(By.id("MMMenu0805194703_0_Item_1"));

		String mouseOverScript =
				"if(document.createEvent){var evObj = document.createEvent('MouseEvents');" 
			    +"evObj.initEvent('mouseover',true, false); arguments[0].dispatchEvent(evObj);} " 
			    +"else if(document.createEventObject) { arguments[0].fireEvent('onmouseover');}";

		((JavascriptExecutor) DriverFactory.getDriver()).executeScript(mouseOverScript, we);
		Thread.sleep(1000);
		((JavascriptExecutor) DriverFactory.getDriver()).executeScript(mouseOverScript,  wd);
		Thread.sleep(1000);
		((JavascriptExecutor) DriverFactory.getDriver()).executeScript("arguments[0].click();", wd);
	}
		

	@When("^CT01 - Añadir Correo \"(.*?)\" válido$")
	public void inserirCorreo(String correo) throws Throwable {
		Thread.sleep(5000);
		WebElement we = DriverFactory.getDriver().findElement(By.id("m_creditos"));
		WebElement wd = DriverFactory.getDriver().findElement(By.id("MMMenu0805194703_0_Item_2"));

		String mouseOverScript =
				"if(document.createEvent){var evObj = document.createEvent('MouseEvents');" 
			    +"evObj.initEvent('mouseover',true, false); arguments[0].dispatchEvent(evObj);} " 
			    +"else if(document.createEventObject) { arguments[0].fireEvent('onmouseover');}";

		((JavascriptExecutor) DriverFactory.getDriver()).executeScript(mouseOverScript, we);
		Thread.sleep(1000);
		((JavascriptExecutor) DriverFactory.getDriver()).executeScript(mouseOverScript,  wd);
		Thread.sleep(1000);
		((JavascriptExecutor) DriverFactory.getDriver()).executeScript("arguments[0].click();", wd);
	}

	@When("^CT01 - Clic en enviar$")
	public void acessarTelaTipoAutorizacao() throws Throwable {
		Thread.sleep(5000);
		WebElement we = DriverFactory.getDriver().findElement(By.id("m_creditos"));
		WebElement wd = DriverFactory.getDriver().findElement(By.id("MMMenu0805194703_0_Item_3"));

		String mouseOverScript =
				"if(document.createEvent){var evObj = document.createEvent('MouseEvents');" 
			    +"evObj.initEvent('mouseover',true, false); arguments[0].dispatchEvent(evObj);} " 
			    +"else if(document.createEventObject) { arguments[0].fireEvent('onmouseover');}";

		((JavascriptExecutor) DriverFactory.getDriver()).executeScript(mouseOverScript, we);
		Thread.sleep(1000);
		((JavascriptExecutor) DriverFactory.getDriver()).executeScript(mouseOverScript,  wd);
		Thread.sleep(1000);
		((JavascriptExecutor) DriverFactory.getDriver()).executeScript("arguments[0].click();", wd);
	}
	
	
	}

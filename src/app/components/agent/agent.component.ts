import { Component, OnInit } from '@angular/core';
import { Agent } from 'src/app/models/agent';
import { AgentService } from 'src/app/services/agent.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit  {

  constructor(public agentService: AgentService){
  }

  agents:Agent[];
  totalAgents :number=0;
  activeAgents :number=0;
  disconnectedAgents :number=0;
  pendingAgents :number=0;
  neverConnectedAgents :number=0;

  ngOnInit(): void {
    this.agentService.getAllAgents().subscribe( data => {this.agents = data,
    this.setDisplayValues(this.agents)} );
  }

  setDisplayValues(listAgent:Agent[]){
    if (listAgent != undefined && listAgent.length !=0){
   this.agents.filter(agent=>(agent.name != 'cyr-customer-ossec.local') && (agent.id != 0)  )
   .forEach(element => {
     this.totalAgents++
     if (element.status === "active")
          this.activeAgents++;
          else if (element.status === "disconnected")
          this.disconnectedAgents++;
          else if (element.status === "pending")
          this.pendingAgents++;
          else if (element.status === "never_connected")
          this.neverConnectedAgents++;
   });
  }}

}
